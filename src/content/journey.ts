import type { JourneyStep } from './types';

export const journeyIntro = {
  eyebrow: 'Our process',
  heading: 'Your journey, step by step',
  subheading: 'Clear milestones from your initial counselling to international arrival.',
};

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: 'Free counselling',
    description: 'Tell us your goals and background.',
    art: 'ill-step-1',
  },
  {
    step: 2,
    title: 'Choose program and country',
    description: 'We help you compare options.',
    art: 'ill-step-2',
  },
  {
    step: 3,
    title: 'Admission or internship offer',
    description: 'We support your applications.',
    art: 'ill-step-3',
  },
  {
    step: 4,
    title: 'Visa and documentation',
    description: 'We guide you through the paperwork.',
    art: 'ill-step-4',
  },
  {
    step: 5,
    title: 'Fly and get placed',
    description: 'Start your program abroad.',
    art: 'ill-step-5',
  },
];
