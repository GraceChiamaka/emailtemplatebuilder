import { BlockData } from "@container/types";

export const renderBlockToEmailHTML = (block: BlockData): string => {
    const { type, props, value, style } = block;
    const styleString = style
        ? Object.entries(style)
              .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
              .join(" ")
        : "";

    switch (type) {
        case "heading":
            return `<h1 style="${styleString}">${value}</h1>`;
        case "text":
            return `<p style="${styleString}">${value}</p>`;
        case "image":
            return `<img src="${value}" alt="" style="${styleString}" />`;
        case "button":
            return `<a href="${props?.link}" style="${styleString}">${value}</a>`;
        // Extend as needed
        default:
            return "";
    }
};

const camelToKebab = (str: string) => {
    return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
};

export const exportBlocksToEmailHTML = (blocks: BlockData[]): string => {
    return blocks.map(renderBlockToEmailHTML).join("\n");
};

export const wrapInEmailSkeleton = (content: string): string => {
    return `
  <!DOCTYPE html>
  <html>
	<head>
	  <meta charset="UTF-8" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	  <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200..800&display=swap" rel="stylesheet">
	</head>
	<body style="margin:0;padding:0; ">
	  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-family:'BioRhyme', serif;">
		<tr>
		  <td align="center">
			<table role="presentation" width="600" cellspacing="0" cellpadding="20" border="0" style="background:#ffffff;">
			  <tr>
				<td>
				  ${content}
				</td>
			  </tr>
			</table>
		  </td>
		</tr>
	  </table>
	</body>
  </html>
	`;
};
export const downloadHtmlFile = (htmlString: string, filename = "template.html") => {
    const blob = new Blob([htmlString], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
};

export const convertToJSON = (blocks: BlockData[], version: string | number = "1.0.0"): string => {
    return JSON.stringify(
        {
            blocks,
            metadata: {
                createdAt: new Date().toISOString(),
                version: version,
            },
        },
        null,
        2,
    );
};
