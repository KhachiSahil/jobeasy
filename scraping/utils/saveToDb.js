const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Read job data from JSON file
const jobsFilePath = path.resolve(__dirname, '../../data/hiring-cafe-jobs.json');
const jobData = JSON.parse(fs.readFileSync(jobsFilePath, 'utf-8'));

// Function to save the jobs data
async function saveJobs(jobData) {
  try {
    for (let job of jobData) {
      const savedJob = await prisma.jobs.create({
        data: {
          JobName: job.title,
          CompanyName: job.company,
          Salary: job.salary,
          Experience: parseExperience(job.experience),
          Location: Array.isArray(job.location) ? job.location.join(', ') : job.location, // Check if location is an array
          Description: job.posted,
          skills: {
            connectOrCreate: job.skills.map((skill) => ({
              where: { name: skill },
              create: { name: skill },
            })),
          },
        },
      });

      console.log('Job created:', savedJob);
    }
  } catch (error) {
    console.error('Error saving jobs:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to parse experience
function parseExperience(experience) {
  const expArr = experience.split('-');
  if (expArr.length === 2) {
    return parseInt(expArr[0].trim());
  }
  return 0; 
}

saveJobs(jobData);
