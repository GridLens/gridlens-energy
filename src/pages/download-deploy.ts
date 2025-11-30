import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { join } from 'path';

export const GET: APIRoute = async () => {
  try {
    const filePath = join(process.cwd(), 'DEPLOY.tar.gz');
    const fileBuffer = readFileSync(filePath);
    
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/gzip',
        'Content-Disposition': 'attachment; filename="gridlens-deployment.tar.gz"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    return new Response('File not found', { status: 404 });
  }
};
