-- CreateTable
CREATE TABLE "response" (
    "id" SERIAL NOT NULL,
    "feeling" TEXT NOT NULL,
    "favourite_hobbies" TEXT[],

    CONSTRAINT "response_pkey" PRIMARY KEY ("id")
);
