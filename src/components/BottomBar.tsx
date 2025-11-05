"use client";

import { useState } from 'react';
import DecryptedText from '@/components/DecryptedText';
import { useSupabase } from '@/components/ClientSupabaseProvider';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function BottomBar() {
  const { supabase, isLoading } = useSupabase();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setSubmitMessage('Eroare: Conexiunea la baza de date nu este disponibilă.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert({ nume: formData.lastName, prenume: formData.firstName })
        .select();

      if (error) {
        console.error('Error submitting registration:', error);
        setSubmitMessage(`Eroare: ${error.message}`);
      } else {
        setSubmitMessage('Înregistrare cu succes! Vă așteptăm la eveniment.');
        setTimeout(() => {
          setIsOpen(false);
          setFormData({ firstName: '', lastName: '' });
          setSubmitMessage('');
        }, 2000);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setSubmitMessage('A apărut o eroare neașteptată. Vă rugăm încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-yellow-400/20 z-50">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <div className="px-6 py-4">
            <button
              className="w-full py-4 px-8 rounded-full font-medium text-lg transition-all duration-300 transform bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-400/25"
            >
              <DecryptedText
                text="Voi veni"
                className="text-black"
                encryptedClassName="text-gray-600"
                speed={30}
                maxIterations={10}
                sequential={true}
                revealDirection="center"
                animateOn="view"
              />
            </button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-black border-t border-yellow-400/20 data-[vaul-drawer-direction=bottom]:h-[70vh]">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="text-center">
              <DrawerTitle className="text-white text-2xl">
                <DecryptedText
                  text="Confirmare participare"
                  className="text-white"
                  encryptedClassName="text-gray-600"
                  speed={30}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="center"
                  animateOn="view"
                />
              </DrawerTitle>
              <DrawerDescription className="text-gray-300 mt-2">
                <DecryptedText
                  text="Vă rugăm să introduceți datele pentru confirmare"
                  className="text-gray-300"
                  encryptedClassName="text-gray-600"
                  speed={30}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="center"
                  animateOn="view"
                />
              </DrawerDescription>
            </DrawerHeader>
            <form onSubmit={handleSubmit} className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-yellow-400 mb-2">
                    <DecryptedText
                      text="Nume"
                      className="text-yellow-400"
                      encryptedClassName="text-gray-600"
                      speed={30}
                      maxIterations={8}
                      sequential={true}
                      revealDirection="start"
                      animateOn="view"
                    />
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Introduceți numele"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-yellow-400 mb-2">
                    <DecryptedText
                      text="Prenume"
                      className="text-yellow-400"
                      encryptedClassName="text-gray-600"
                      speed={30}
                      maxIterations={8}
                      sequential={true}
                      revealDirection="start"
                      animateOn="view"
                    />
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Introduceți prenumele"
                  />
                </div>
              </div>
              {submitMessage && (
                <div className={`p-3 rounded-lg mb-4 text-center ${
                  submitMessage.includes('succes')
                    ? 'bg-green-900/50 text-green-300 border border-green-400/30'
                    : 'bg-red-900/50 text-red-300 border border-red-400/30'
                }`}>
                  <DecryptedText
                    text={submitMessage}
                    className={submitMessage.includes('succes') ? "text-green-300" : "text-red-300"}
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="center"
                    animateOn="view"
                  />
                </div>
              )}
              <DrawerFooter className="px-0 pt-6">
                <div className="flex gap-3">
                  <DrawerClose asChild>
                    <button
                      type="button"
                      className="flex-1 py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <DecryptedText
                        text="Anulează"
                        className="text-white"
                        encryptedClassName="text-gray-600"
                        speed={30}
                        maxIterations={8}
                        sequential={true}
                        revealDirection="center"
                        animateOn="view"
                      />
                    </button>
                  </DrawerClose>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <DecryptedText
                      text={isSubmitting ? "Se trimite..." : "Trimite"}
                      className="text-black"
                      encryptedClassName="text-gray-600"
                      speed={30}
                      maxIterations={8}
                      sequential={true}
                      revealDirection="center"
                      animateOn="view"
                    />
                  </button>
                </div>
              </DrawerFooter>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}