async function BookDetail({
  params,
}: {
  params: Promise<{ authorID: string; bookID: string }>;
}) {
  const { authorID, bookID } = await params;
  return (
    <div>
      Book Name : {bookID} By Author : {authorID}{" "}
    </div>
  );
}

export default BookDetail;
