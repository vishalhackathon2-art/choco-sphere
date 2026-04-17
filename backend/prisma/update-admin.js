import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const email = process.argv[2];

  if (!email) {
    console.error("Please provide an email address");
    console.log("Usage: node prisma/update-admin.js <email>");
    process.exit(1);
  }

  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user) {
    console.error(`User with email "${email}" not found`);
    process.exit(1);
  }

  const updatedUser = await prisma.user.update({
    where: { email: email.toLowerCase() },
    data: { role: "ADMIN" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  console.log("User updated to ADMIN:");
  console.log(JSON.stringify(updatedUser, null, 2));
};

main()
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
