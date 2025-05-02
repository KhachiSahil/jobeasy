-- CreateTable
CREATE TABLE "Users" (
    "UserID" SERIAL NOT NULL,
    "Name" VARCHAR(50) NOT NULL,
    "Password" VARCHAR(50) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "JobId" SERIAL NOT NULL,
    "JobName" VARCHAR(100) NOT NULL,
    "CompanyName" VARCHAR(200) NOT NULL,
    "Location" VARCHAR(100),
    "Description" VARCHAR(400),
    "Salary" VARCHAR(100),
    "Duration" TIMESTAMP(3),

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("JobId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Name_key" ON "Users"("Name");
