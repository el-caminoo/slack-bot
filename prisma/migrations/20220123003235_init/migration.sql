-- CreateTable
CREATE TABLE "responses" (
    "id" SERIAL NOT NULL,
    "feeling" TEXT,
    "favourite_hobbies" TEXT[],

    CONSTRAINT "responses_pkey" PRIMARY KEY ("id")
);
