"use server"
import nlp from "compromise";

export async function nlpExtraction(dataText: string): Promise<Record<string, string>> {
    const sections = extractSections(dataText);

    const name = extractName(dataText);
    const result: Record<string, string> = {
        Name: name,
    };

    // Add the extracted content for each section
    for (const [section, content] of Object.entries(sections)) {
        result[section] = content;
    }

    return result;
}

// Extract Name from the document using NLP
function extractName(dataText: string): string {
    const doc = nlp(dataText);
    const name = doc.people().first().text();
    return name || "Name not found";
}

// Function to extract all sections in a resume
function extractSections(dataText: string): Record<string, string> {
    const sections: Record<string, string> = {};

    const sectionHeadings = [
        "Skills",
        "Education",
        "Experience",
        "Projects",
        "Certifications",
        "Summary",
        "Work History",
        "Languages",
        "Volunteer",
        "Awards"
    ];

    // Extract text for each section
    sectionHeadings.forEach(heading => {
        const sectionContent = extractSectionContent(dataText, heading, sectionHeadings);
        if (sectionContent) {
            sections[heading] = sectionContent;
        } else {
            console.log(`No content found for section: ${heading}`);
        }
    });

    return sections;
}

// Function to extract text after a section heading
function extractSectionContent(dataText: string, heading: string, sectionHeadings: string[]): string | null {
    const lowerText = dataText.toLowerCase();
    const lowerHeading = heading.toLowerCase();

    // Find the start index of the section
    const startIndex = lowerText.indexOf(lowerHeading);
    if (startIndex === -1) return null;

    let sectionText = dataText.substring(startIndex + heading.length).trim();

    // Look for the next section heading in the extracted content
    const nextSectionIndex = sectionHeadings
        .map(section => section.toLowerCase())
        .filter(section => section !== lowerHeading)
        .map(section => sectionText.toLowerCase().indexOf(section))
        .filter(index => index !== -1)
        .sort((a, b) => a - b)[0]; // Find the nearest next section

    if (nextSectionIndex !== undefined) {
        sectionText = sectionText.substring(0, nextSectionIndex).trim();
    }

    return sectionText;
}
