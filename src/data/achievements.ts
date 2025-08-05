export interface Achievements {
  id: string;
  name: string;
  type: 'msg' | 'hrs' | 'custom';
  value: number | boolean;
}

const achievements: Achievements[] = [
  { id: 'msg10', name: '10 messages', type: 'msg', value: 10 },
  { id: 'msg100', name: '100 messages', type: 'msg', value: 100 },
  { id: 'hrs5', name: '5 hours online', type: 'hrs', value: 5 },
  { id: 'hrs25', name: '25 hours online', type: 'hrs', value: 25 },
  { id: 'hrs50', name: '50 hours online', type: 'hrs', value: 50 },
  { id: 'noSpam', name: '1 day without spam', type: 'custom', value: true },
];

export default achievements;