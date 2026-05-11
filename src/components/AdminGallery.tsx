'use client';

import { useCallback, useEffect, useState } from 'react';
import { Edit2, Plus, Trash2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  stats: string;
  image: string;
}

export default function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', category: '', stats: '', image: '' as string | null });

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setItems(data.items || []);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const resetForm = () => {
    setEditingId(null);
    setShowForm(false);
    setPreview(null);
    setFormData({ title: '', category: '', stats: '', image: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/gallery/${editingId}` : '/api/gallery';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchItems();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving gallery item:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchItems();
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingId(item.id);
    setShowForm(true);
    setPreview(item.image);
    setFormData({ title: item.title, category: item.category, stats: item.stats, image: item.image });
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Manage Gallery</h3>
        <button
          onClick={() => {
            setShowForm((value) => !value);
            if (showForm) return;
            resetForm();
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Stats</label>
            <input
              type="text"
              value={formData.stats}
              onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                if (file.size > 7_500_000) {
                  alert('Image too large (max ~7.5MB)');
                  return;
                }

                const reader = new FileReader();
                reader.onload = () => {
                  const result = reader.result as string;
                  setFormData((current) => ({ ...current, image: result }));
                  setPreview(result);
                };
                reader.readAsDataURL(file);
              }}
              className="w-full"
            />
            {preview && (
              <div className="mt-3">
                <img src={preview} alt="gallery preview" className="w-40 h-28 object-cover rounded-lg" />
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover">
              {editingId ? 'Update' : 'Add'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">{item.category}</p>
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{item.stats}</p>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-800">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}