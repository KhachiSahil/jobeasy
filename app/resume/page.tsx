"use client"
import { useState } from "react";
import handleResume from "@/actions/handleResume";
export default function Resume(){
    const [resume,setResume] = useState<File | null>(null);
    const [message,setMessage] = useState<string>("");

    const handleChange = (data : React.ChangeEvent<HTMLInputElement>) =>{
        const file = data.target.files?.[0];
        setResume(file || null);
    }

    const HandleSubmit = async(e : React.FormEvent) =>{
        e.preventDefault();
        if(!resume){
            setMessage("Please upload the resume");
            return;
        }
        const res = await handleResume(resume);
        setMessage(res.message);
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
            <input type="file" accept=".pdf, .docx" onChange={handleChange} placeholder="Enterr your resume here"/>
            <input type="submit"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}