import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PointSection({
  points,
}: {
  points: { value: number; link?: string; name: string; isActive: boolean }[];
}) {
  return (
    <div className="flex font-main gap-6 flex-col sm:flex-row justify-center items-start sm:items-center py-4">
      {points.map((point, indx) => (
        <div
          key={indx}
          className={cn(
            'flex items-center justify-center tracking-tight gap-2',
            point.isActive && 'text-[#FF3366]'
          )}
        >
          <p
            className={`w-8 h-8 flex justify-center items-center rounded-full font-semibold border ${
              point.isActive ? 'border-[#FF3366]' : 'border-black'
            }`}
          >
            {point.value.toString()}
          </p>

          {point.link ? (
            <Link href={point.link}>
              <h3 className="cursor-pointer hover:underline">{point.name}</h3>
            </Link>
          ) : (
            <h3>{point.name}</h3>
          )}
        </div>
      ))}
    </div>
  );
}
