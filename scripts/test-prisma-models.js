(async ()=>{
  try{
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    const keys = Object.keys(prisma);
    console.log('client keys:', keys.filter(k=>!k.startsWith('$')).join(', '));
    await prisma.$connect();
    await prisma.$disconnect();
  }catch(e){
    console.error('PRISMA ERROR', e && e.message ? e.message : e);
    process.exit(1);
  }
})();
