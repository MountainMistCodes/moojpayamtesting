import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  LocateIcon,
  Target,
  BarChart3,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
  index: number;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  icon,
  title,
  description,
  highlight,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
      }}
      viewport={{ once: true }}
      className="relative bg-white rounded-3xl p-8 group transform transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary-200 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{
              rotate: { duration: 0.6, ease: "easeInOut" },
              scale: { duration: 0.3, ease: "easeOut" },
            }}
            className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
          >
            <div className="text-primary-500 w-8 h-8">{icon}</div>
          </motion.div>
          
          <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-bold group-hover:bg-primary-200 transition-colors">
            {highlight}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>

        <div className="mt-6 flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm">بیشتر بدانید</span>
          <ArrowRight size={16} className="mr-2" />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const highlightFeatures = [
    {
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "ارسال انبوه پیامک",
      description: "ارسال همزمان هزاران پیامک با نرخ تحویل ۹۹.۵٪ و سرعت بالا",
      highlight: "محبوب‌ترین"
    },
    {
      icon: <LocateIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "ارسال منطقه‌ای",
      description: "ارسال پیامک به مناطق خاص از روی نقشه یا کد پستی",
      highlight: "منحصر به فرد"
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "هدفمندی هوشمند",
      description: "فیلتر پیشرفته بر اساس سن، جنسیت و رفتار مشتری",
      highlight: "هوشمند"
    },
    {
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "تحلیل و گزارش",
      description: "داشبورد تحلیلی پیشرفته با نمودارهای تعاملی و آمار دقیق",
      highlight: "حرفه‌ای"
    },
  ];

  const quickStats = [
    { number: "۲۰+", label: "قابلیت حرفه‌ای" },
    { number: "۹۹.۵٪", label: "نرخ تحویل" },
    { number: "۲۴/۷", label: "پشتیبانی" },
    { number: "۱۰۰K+", label: "پیامک در ساعت" },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-blue-100 text-primary-500 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            <span className="font-semibold text-sm sm:text-base">امکانات برتر</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
          >
            قدرت{" "}
            <span className="text-primary-500 relative">
              پیامک هوشمند
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500/30 rounded-full"></span>
            </span>
            {" "}را تجربه کنید
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
          >
            با بیش از ۲۰ قابلیت حرفه‌ای، موج پیام همه نیازهای بازاریابی پیامکی شما را پوشش می‌دهد
          </motion.p>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {highlightFeatures.map((feature, index) => (
            <FeatureHighlight
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              index={index}
            />
          ))}
        </div>

        {/* Creative Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-4 inline-flex mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">سرعت فوق‌العاده</h3>
                <p className="text-white/90">ارسال ۱۰۰ پیامک در ثانیه</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-4 inline-flex mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">دقت بالا</h3>
                <p className="text-white/90">هدفمندی ۳۰۰٪ بهتر از روش‌های سنتی</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-4 inline-flex mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">کیفیت برتر</h3>
                <p className="text-white/90">رضایت ۹۸٪ مشتریان از خدمات ما</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              و ۱۵+ قابلیت حرفه‌ای دیگر!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              پیامک صوتی، ارسال زنده، وب‌سرویس، مدیریت مخاطبین و خیلی بیشتر...
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              بیش از ۲۰ قابلیت حرفه‌ای در انتظار شماست
            </h3>
            <p className="text-gray-600 mb-6">
              از ارسال انبوه تا پیامک صوتی، از تحلیل هوشمند تا ارسال منطقه‌ای
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/features"
              className="btn btn-primary inline-flex items-center px-8 py-3 text-lg"
            >
              <span>مشاهده همه امکانات</span>
              <ArrowRight size={20} className="mr-2" />
            </Link>
            <a
              href="#pricing"
              className="btn btn-outline inline-flex items-center px-8 py-3 text-lg"
            >
              مشاهده تعرفه‌ها
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;