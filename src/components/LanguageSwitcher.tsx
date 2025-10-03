"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const languages = [
  { code: 'en', name: 'Eng'},
  { code: 'hi', name: 'Hin'},
  { code: 'mr', name: 'Mar'},
];



export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    await i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed z-[999] bottom-4 right-4 shadow-md shadow-black/50 rounded-full">
      <motion.div
        animate={{y: isOpen ? '-300%' : '0%'}}
        transition={{ duration: 0.75, ease:[0.25, 1, 0.5, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* Language options container */}
        <motion.div 
          className={cn(
            "absolute bg-white rounded-full flex flex-col items-center justify-center overflow-hidden ring-2 ring-orange-500",
            isOpen ? 'h-36' : 'h-12'
          )}
          initial={{ width: 48, height: 48 }}
          animate={{ 
            width: 48,
            height: isOpen ? 144 : 48
          }}
          transition={{ duration: 0.75, ease:[0.25, 1, 0.5, 1] }}
        >
          {isOpen && (
            <div className="flex flex-col items-center gap-2 py-2">
              {languages.map((language) => (
                <button 
                  key={language.code} 
                  onClick={() => handleLanguageChange(language.code)} 
                  className={cn(
                    "flex items-center justify-center transition-colors size-8 rounded-full text-xs font-semibold",
                    currentLanguage.code === language.code 
                      ? "bg-orange-500 text-white" 
                      : "hover:bg-orange-100"
                  )}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.button 
          animate={{y: isOpen ? '300%' : '0%'}}
          transition={{ duration: 0.75, ease:[0.25, 1, 0.5, 1] }}
          onClick={() => setIsOpen(!isOpen)}
          className="size-12 flex items-center justify-center rounded-full bg-white ring-2 ring-orange-500 cursor-pointer z-10"
        >
          {isOpen ? (
            <X className="size-4" />
          ) : (
            <h1 className="text-sm font-semibold">{currentLanguage.name}</h1>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
