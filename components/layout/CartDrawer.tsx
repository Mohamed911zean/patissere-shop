'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, total, removeItem, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  const { language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              "fixed top-0 bottom-0 w-full max-w-[450px] bg-bg-base z-[101] flex flex-col",
              language === 'ar' ? "left-0" : "right-0"
            )}
          >
            {/* Header */}
            <div className="p-6 border-b border-border-subtle flex items-center justify-between bg-bg-card">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-gold" />
                <h2 className="text-xl font-display text-text-primary uppercase tracking-widest">Your Cart</h2>
                <span className="bg-gold text-text-on-gold text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-text-muted hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-bg-elevated rounded-full flex items-center justify-center text-text-muted mb-6">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">Your cart is empty</h3>
                  <p className="text-text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
                  <Button variant="gold" onClick={() => setIsCartOpen(false)}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-border-subtle shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium text-text-primary uppercase tracking-wide">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-text-muted hover:text-error transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gold font-bold text-sm mt-1">{item.price} EGP</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-bg-elevated border border-border-subtle rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-text-primary">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-xs text-text-muted">Total: {item.price * item.quantity} EGP</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-bg-card border-t border-border-subtle space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary uppercase tracking-widest text-xs font-bold">Subtotal</span>
                  <span className="text-xl font-bold text-gold">{total} EGP</span>
                </div>
                <p className="text-[10px] text-text-muted text-center uppercase tracking-wider">
                  Taxes and shipping calculated at checkout
                </p>
                <Button variant="gold" className="w-full h-14 text-base">
                  Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
