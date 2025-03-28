import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/action";
import { notFound } from "next/navigation";

type SnipppetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailPage: React.FC<SnipppetDetailsProps> = async ({
  params,
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetActions}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;


export const generateStaticParams = async () => {
  const snippets = await prisma.snippets.findMany();

  return snippets.map((snippet)=> {
    return {id:snippet.id.toString()}
  })
}
 