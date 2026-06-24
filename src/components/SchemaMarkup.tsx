import React, { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'WebSite' | 'Organization' | 'BreadcrumbList' | 'FAQPage' | 'Article' | 'Offer';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    // Generate a unique ID for this schema tag
    const scriptId = `schema-jsonld-${type}`;
    
    // Remove existing script with same ID to prevent duplicates on page change
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create the new schema declaration
    const schemaObj = {
      "@context": "https://schema.org",
      ...data
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaObj);
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const scriptToClean = document.getElementById(scriptId);
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [type, data]);

  return null; // This component doesn't render visual HTML elements, it modifies the head!
}
