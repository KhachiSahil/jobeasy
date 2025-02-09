"use client"
import { useState } from "react";
import handleResume from "@/actions/handleResume";

export default function Resume() {
    const [resume, setResume] = useState<File | null>(null);
    const [message, setMessage] = useState<string>("");

    const handleChange = (data: React.ChangeEvent<HTMLInputElement>) => {
        const file = data.target.files?.[0];
        setResume(file || null);
    }

    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resume) {
            setMessage("Please upload the resume");
            return;
        }
    
        try {
            const res = await handleResume(resume);
            console.dir(res);
            if (typeof(res) == "object") {
                console.log("hi")
                setMessage(JSON.stringify(res, null, 2));
            } else {
                setMessage(res);
            }
        } catch (error) {
            console.error("Error processing resume:", error);
            setMessage("An error occurred while processing the resume.");
        }
    };
    

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="file" accept=".pdf, .docx" onChange={handleChange} />
                <input type="submit" value="Upload" />
            </form>
            {message && (
                <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {message}
                </pre>
            )}
        </div>
    );
}
