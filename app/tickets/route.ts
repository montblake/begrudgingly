export async function GET() {
  return new Response("This page has been removed.", { status: 410 });
}
