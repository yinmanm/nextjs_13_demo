-- CreateTable
CREATE TABLE "_BuyerToChatGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BuyerToChatGroup_AB_unique" ON "_BuyerToChatGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_BuyerToChatGroup_B_index" ON "_BuyerToChatGroup"("B");

-- AddForeignKey
ALTER TABLE "_BuyerToChatGroup" ADD CONSTRAINT "_BuyerToChatGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuyerToChatGroup" ADD CONSTRAINT "_BuyerToChatGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "ChatGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
