"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoLanguage } from "react-icons/io5";
import { toast } from "sonner";

const languages = [
  { code: 'en', name: 'Eng'},
  { code: 'hi', name: 'Hin'},
  { code: 'mr', name: 'Mar'},
];



export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    await i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Show toast notification
    const selectedLanguage = languages.find(lang => lang.code === languageCode);
    const languageName = selectedLanguage ? t(`language.${selectedLanguage.code === 'en' ? 'english' : selectedLanguage.code === 'hi' ? 'hindi' : 'marathi'}`) : languageCode;
    
    toast.success(t('language.changedTo', { language: languageName }), {
      duration: 3000,
    });
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
            "absolute bg-white rounded-full flex flex-col items-center justify-center overflow-hidden",
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
            <div className="flex flex-col items-center">
              {languages.map((language) => (
                <button 
                  key={language.code} 
                  onClick={() => handleLanguageChange(language.code)} 
                  className={cn(
                    "flex items-center justify-center transition-colors size-12 rounded-full text-xs font-semibold",
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
          className="size-12 flex items-center justify-center rounded-full bg-white cursor-pointer z-10 hover:bg-orange-200 transition-colors duration-500"
        >
          {isOpen ? (
            <X className="size-4 text-orange-500" />
          ) : (
            <IoLanguage className="size-6 text-orange-500"/>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
