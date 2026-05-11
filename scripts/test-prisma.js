(async ()=>{
  try{
    const { PrismaClient } = require('@prisma/client');
    console.log('PrismaClient type:', typeof PrismaClient);
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log('Prisma connected');
    await prisma.$disconnect();
  }catch(e){
    console.error('PRISMA ERROR', e && e.message ? e.message : e);
    process.exit(1);
  }
})();
