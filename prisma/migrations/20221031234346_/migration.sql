/*
  Warnings:

  - You are about to drop the `_categories_books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_categories_books" DROP CONSTRAINT "_categories_books_A_fkey";

-- DropForeignKey
ALTER TABLE "_categories_books" DROP CONSTRAINT "_categories_books_B_fkey";

-- DropTable
DROP TABLE "_categories_books";

-- CreateTable
CREATE TABLE "categories_books" (
    "bookId" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,

    CONSTRAINT "categories_books_pkey" PRIMARY KEY ("bookId","categoryID")
);

-- AddForeignKey
ALTER TABLE "categories_books" ADD CONSTRAINT "categories_books_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_books" ADD CONSTRAINT "categories_books_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
