function FooterItem({title, items}) {
  return (
    <div>
      <div className="flex flex-col mb-[20px]">
        <h1 className="font-bold">{title}</h1>
        {items.map((item, index) => (
            <a key={index} className="hover:underline" href="">
            {item}
            </a> 
        ))}
      </div>
    </div>
  );
}

export default FooterItem;
