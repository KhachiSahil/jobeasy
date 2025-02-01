"use server"
import { writeFile } from "fs/promises";
import { join } from "path";
export default async function handleResume(resume : File){
    try{
        const file = await resume.arrayBuffer();
        const tempPath = join("/tmp",resume.name);

        await writeFile(tempPath,Buffer.from(file));
        console.log("file saved at:" + tempPath);

        const ParsedText = await parseResumeText(tempPath);
    
        return {success : true, message : `Parsed Text: ${ParsedText}`};
    }catch(error){
        return {success : false , message : `${error}`};
    }
}

async function parseResumeText(tempPath : string): Promise<string>{
    return `Extracted text from: `;
}