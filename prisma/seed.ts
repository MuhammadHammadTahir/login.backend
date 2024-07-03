import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
    const user = await prisma.article.create({
        data:{
            username: 'hammad',
            password: '1234'
        }
    })
    console.log('User ceridentials:', user)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });