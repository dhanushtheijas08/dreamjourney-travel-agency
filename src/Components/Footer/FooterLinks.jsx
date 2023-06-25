const FooterLinks = function ({ title, links }) {
  let footerLinks = links.map((link) => (
    <li>
      <a href={`#${link.toLowerCase()}`} className="text-base opacity-60">
        {link}
      </a>
    </li>
  ));
  return (
    <div className="font-pop">
      <label className="text-xl font-semibold">{title}</label>
      <ul className="flex flex-col gap-2 mt-4">{footerLinks}</ul>
    </div>
  );
};

export default FooterLinks;
