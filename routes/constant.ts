import ieltsEgb from '@/static/svg/ielts-egb.svg';

export interface BotItem {
  id: string;
  text: string;
  icon: string;
  desc: string;
}

export const bots: BotItem[] = [
  {
    id: 'ielts-egb',
    text: 'IELTS-egb',
    icon: ieltsEgb,
    desc: '你的雅思作文打分器，又快又准',
  },
];
