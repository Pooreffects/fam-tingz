export default function BelovedList({ name, love }) {
  return (
    <li className="flex flex-col items-center gap-4">
      <p className="font-secondary tracking-wide text-xl font-semibold text-slate-300">
        {name}
      </p>
      <p className="font-secondary tracking-wide text-3xl font-bold text-red-400">
        {love}
      </p>
    </li>
  );
}
