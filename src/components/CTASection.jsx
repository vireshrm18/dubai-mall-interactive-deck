import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="glass-card p-12 md:p-20 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Secure Your Place <br />
            <span className="text-accent italic">At The Center of It All</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Join the world's most successful brands. Whether you are looking for a flagship lease, 
            a global sponsorship, or an event venue, our team is ready to discuss your vision.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4 font-bold">Full Name</label>
            <input 
              type="text" 
              placeholder="Alexander Wright"
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4 font-bold">Email Address</label>
            <input 
              type="email" 
              placeholder="alex@brand.com"
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4 font-bold">Inquiry Type</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
              <option className="bg-black">Retail Leasing Inquiry</option>
              <option className="bg-black">Sponsorship Opportunity</option>
              <option className="bg-black">Event Venue Booking</option>
              <option className="bg-black">Media & Brand Activation</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4 font-bold">Your Vision</label>
            <textarea 
              placeholder="Tell us how you want to activate within Dubai Mall..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="md:col-span-2 pt-4">
            <button type="button" className="btn-primary w-full text-lg">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CTASection;
