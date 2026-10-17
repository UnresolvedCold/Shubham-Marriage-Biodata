import type { SVGProps } from 'react';
type Props = SVGProps<SVGSVGElement> & { size?: number };
const paths = {
  Camera: 'M14 4h-4L8 7H3v13h18V7h-5z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  Code2: 'm8 5-7 7 7 7m8-14 7 7-7 7m-3-17-2 20',
  Gamepad2: 'M6 6h12l3 12q0 3-3 1l-3-3H9l-3 3q-3 2-3-1zM8 9v5m-2-2h4m6-2h.01m2 3h.01',
  Compass: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M16 8l-3 5-5 3 3-5z',
  Brain: 'M12 5q-6-7-7 2-5 4 0 7-2 7 7 6V5m0 0q6-7 7 2 5 4 0 7 2 7-7 6M5 7l3 3m11-3-3 3M5 14l3-1m11 1-3-1',
  Puzzle: 'M3 3h6q-2 6 3 6t3-6h6v6q-6-2-6 3t6 3v6h-6q2-6-3-6t-3 6H3v-6q6 2 6-3T3 9z',
  Languages: 'M3 5h12M9 2v3m4 0q-2 9-10 12m2-9 8 9m1 5 5-13 5 13m-8-4h6',
  Sparkles: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
  MessageCircle: 'M21 11a9 9 0 0 1-13 8l-6 3 2-7A9 9 0 1 1 21 11',
  ArrowDown: 'M12 3v18m-7-7 7 7 7-7',
  ArrowUpRight: 'M5 19 19 5M5 5h14v14',
  ChevronDown: 'm6 9 6 6 6-6',
  MapPin: 'M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 1 1 14 0M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  Printer: 'M6 9V2h12v7M6 18H3V9h18v9h-3M6 14h12v8H6zM17 11h1',
};
function icon(name: keyof typeof paths) { return function Icon({ size=24, strokeWidth=1.5, ...rest }: Props) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}><path d={paths[name]}/></svg>; }; }
export const Camera=icon('Camera'), Code2=icon('Code2'), Gamepad2=icon('Gamepad2'), Compass=icon('Compass'), Brain=icon('Brain'), Puzzle=icon('Puzzle'), Languages=icon('Languages'), Sparkles=icon('Sparkles'), MessageCircle=icon('MessageCircle'), ArrowDown=icon('ArrowDown'), ArrowUpRight=icon('ArrowUpRight'), ChevronDown=icon('ChevronDown'), MapPin=icon('MapPin'), Printer=icon('Printer'), MoveUpRight=ArrowUpRight;
