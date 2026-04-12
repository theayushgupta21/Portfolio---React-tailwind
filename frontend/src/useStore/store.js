import { create } from 'zustand';

export const useStore = create((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  
  selectedSkill: null,
  setSelectedSkill: (skill) => set({ selectedSkill: skill }),
  
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  avatarEmotion: 'neutral', // neutral, happy, reacting
  setAvatarEmotion: (emotion) => set({ avatarEmotion: emotion }),
}));
