-- DropForeignKey
ALTER TABLE "EditorialBooks" DROP CONSTRAINT "EditorialBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "EditorialBooks" DROP CONSTRAINT "EditorialBooks_editorialId_fkey";

-- AddForeignKey
ALTER TABLE "EditorialBooks" ADD CONSTRAINT "EditorialBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditorialBooks" ADD CONSTRAINT "EditorialBooks_editorialId_fkey" FOREIGN KEY ("editorialId") REFERENCES "Editorial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
