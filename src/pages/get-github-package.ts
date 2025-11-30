import type { APIRoute } from 'astro';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const GET: APIRoute = async () => {
  try {
    const filePath = join(process.cwd(), 'public', 'github-upload.tar.gz');
    const fileBuffer = await readFile(filePath);
    
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/gzip',
        'Content-Disposition': 'attachment; filename="github-upload.tar.gz"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    return new Response('File not found', { status: 404 });
  }
};
