export default function Tip({
  title,
  category,
  image_url,
  _id,
  children,
  difficultyLevel,
}) {
  return (
    <>
      <tr>
        <th>{title}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12 cursor-pointer">
                <img src={image_url} />
              </div>
            </div>
          </div>
        </td>
        <td>{category}</td>
        <td>{children}</td>
      </tr>
    </>
  );
}
