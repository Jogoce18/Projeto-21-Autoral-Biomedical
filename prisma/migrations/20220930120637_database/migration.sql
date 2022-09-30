/*
  Warnings:

  - You are about to drop the `briefings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "briefings" DROP CONSTRAINT "briefings_projectId_fkey";

-- DropTable
DROP TABLE "briefings";

-- CreateTable
CREATE TABLE "guidances" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "guidances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "guidances" ADD CONSTRAINT "guidances_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
