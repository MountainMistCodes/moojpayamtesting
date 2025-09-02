import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  BarChart3,
  Calendar,
  Zap,
  Clock,
  AudioLinesIcon,
  LocateIcon,
  Target,
  SatelliteDish,
  PlugIcon,
  ListChecks,
  Shield,
  Globe,
  Smartphone,
  TrendingUp,
  Settings,
  Database,
  CheckCircle,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay: number;
  category: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  benefits,
  delay,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{
        opacity: { duration: 0.5, delay, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.2, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 group transform transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary-200"
    >
      <div className="flex items-start justify-between mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{
            rotate: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 0.3, ease: "easeOut" },
          }}
          className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
        >
          <div className="text-primary-500 w-8 h-8">{icon}</div>
        </motion.div>
        
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
          {category}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
        {description}
      </p>

      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 ml-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-primary-500 to-purple-500 mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
    </motion.div>
  );
};

const FeaturesPage: React.FC = () => {
  const featureCategories = [
    {
      title: "ارسال و مدیریت",
      features: [
        {
          icon: <MessageSquare className="h-8 w-8" />,
          title: "ارسال انبوه پیامک",
          description: "ارسال همزمان هزاران پیامک به مخاطبان هدف در کمترین زمان ممکن با بالاترین نرخ تحویل",
          benefits: [
            "ارسال تا ۱۰۰,۰۰۰ پیامک در ساعت",
            "نرخ تحویل بالای ۹۹.۵٪",
            "پشتیبانی از تمام اپراتورهای ایران",
            "ارسال فوری و بدون تأخیر"
          ],
          category: "ارسال"
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: "مدیریت مخاطبین",
          description: "امکان دسته‌بندی، گروه‌بندی و مدیریت پیشرفته مخاطبان برای ارسال هدفمند پیام‌ها",
          benefits: [
            "ایمپورت از فایل Excel و CSV",
            "دسته‌بندی بر اساس سن، جنسیت و علایق",
            "مدیریت لیست سیاه خودکار",
            "تاریخچه کامل تعاملات"
          ],
          category: "مدیریت"
        },
        {
          icon: <Calendar className="h-8 w-8" />,
          title: "ارسال زمانبندی شده",
          description: "برنامه‌ریزی ارسال پیام‌ها در زمان‌های مشخص و به صورت دوره‌ای و مناسبتی",
          benefits: [
            "تنظیم ارسال تا ۶ ماه آینده",
            "ارسال دوره‌ای (روزانه، هفتگی، ماهانه)",
            "تقویم مناسبت‌های ایرانی",
            "هوشمندی زمانی بر اساس منطقه"
          ],
          category: "زمانبندی"
        }
      ]
    },
    {
      title: "هدفمندی و تحلیل",
      features: [
        {
          icon: <LocateIcon className="h-8 w-8" />,
          title: "ارسال منطقه‌ای",
          description: "ارسال پیامک به استان، شهر، و محله مورد نظر خودتان از روی نقشه یا کد پستی",
          benefits: [
            "انتخاب منطقه از روی نقشه تعاملی",
            "فیلتر بر اساس کد پستی",
            "تعیین شعاع دقیق ارسال",
            "آمار جمعیتی هر منطقه"
          ],
          category: "مکان‌یابی"
        },
        {
          icon: <Target className="h-8 w-8" />,
          title: "فیلتر پیشرفته",
          description: "ارسال براساس فیلتر سن، جنسیت و سایر معیارها برای دسترسی دقیق به مخاطب هدف",
          benefits: [
            "فیلتر بر اساس رنج سنی",
            "تفکیک جنسیت",
            "دسته‌بندی شغلی",
            "تحلیل رفتار مشتری"
          ],
          category: "هدفمندی"
        },
        {
          icon: <BarChart3 className="h-8 w-8" />,
          title: "گزارش‌گیری پیشرفته",
          description: "دسترسی به گزارش‌های دقیق از وضعیت ارسال، تحویل و مشاهده پیام‌ها به صورت لحظه‌ای",
          benefits: [
            "داشبورد تحلیلی پیشرفته",
            "نمودارهای تعاملی",
            "گزارش ROI کمپین‌ها",
            "تحلیل بهترین زمان ارسال"
          ],
          category: "تحلیل"
        }
      ]
    },
    {
      title: "فناوری‌های پیشرفته",
      features: [
        {
          icon: <SatelliteDish className="h-8 w-8" />,
          title: "ارسال پیامک زنده (LBS)",
          description: "به افرادی که در موقعیت مکانی مورد‌نظر شما حضور دارند یا در‌حال تردد هستند پیامک ارسال کنید",
          benefits: [
            "ردیابی موقعیت لحظه‌ای",
            "ارسال بر اساس حضور در مکان",
            "تنظیم محدوده زمانی",
            "هوش مصنوعی پیش‌بینی حرکت"
          ],
          category: "فناوری"
        },
        {
          icon: <AudioLinesIcon className="h-8 w-8" />,
          title: "پیامک صوتی",
          description: "قابلیت ارسال پیامک صوتی به صورت تکی و انبوه با امکان تبدیل متن به صوت یا آپلود ویس",
          benefits: [
            "تبدیل متن به گفتار فارسی",
            "آپلود فایل صوتی شخصی",
            "کیفیت صدای HD",
            "پشتیبانی از فرمت‌های مختلف"
          ],
          category: "صوتی"
        },
        {
          icon: <PlugIcon className="h-8 w-8" />,
          title: "خدمات وب‌سرویس",
          description: "اتصال آسان پنل به وب‌سایت یا نرم‌افزار شما و قابلیت ارسال از طریق پترن",
          benefits: [
            "API مستندسازی شده",
            "SDK برای زبان‌های مختلف",
            "Webhook برای دریافت وضعیت",
            "پشتیبانی فنی تخصصی"
          ],
          category: "توسعه"
        }
      ]
    },
    {
      title: "خدمات تخصصی",
      features: [
        {
          icon: <ListChecks className="h-8 w-8" />,
          title: "ارسال هدفمند",
          description: "دسترسی به‌روز به شماره‌های مشاغل و اصناف مختلف",
          benefits: [
            "بانک اطلاعات ۵ میلیون شماره",
            "تفکیک بر اساس صنف",
            "به‌روزرسانی ماهانه",
            "تضمین کیفیت داده‌ها"
          ],
          category: "داده"
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: "سرعت ارسال بالا",
          description: "ارسال فوری پیام‌ها با استفاده از زیرساخت‌های قدرتمند و خطوط پرسرعت",
          benefits: [
            "سرعت ارسال ۱۰۰ پیامک در ثانیه",
            "اتصال مستقیم به اپراتورها",
            "Load Balancing هوشمند",
            "Failover خودکار"
          ],
          category: "عملکرد"
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: "پشتیبانی ۲۴/۷",
          description: "پشتیبانی شبانه‌روزی و در تمام روزهای هفته برای رفع مشکلات احتمالی",
          benefits: [
            "پشتیبانی تلفنی و آنلاین",
            "تیکت‌سیستم پیشرفته",
            "راهنمای جامع و ویدیویی",
            "مشاوره رایگان کمپین"
          ],
          category: "پشتیبانی"
        }
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "امنیت بالا",
      description: "رمزنگاری SSL و حفاظت از اطلاعات شخصی"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "پوشش سراسری",
      description: "ارسال به تمام نقاط ایران با یک پنل"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "اپلیکیشن موبایل",
      description: "مدیریت پنل از طریق اپ اندروید و iOS"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "تحلیل هوشمند",
      description: "پیش‌بینی بهترین زمان ارسال با AI"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "تنظیمات پیشرفته",
      description: "کنترل کامل بر تمام جنبه‌های ارسال"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "بک‌آپ خودکار",
      description: "پشتیبان‌گیری روزانه از تمام اطلاعات"
    }
  ];

  return (
    <>
      <SEOHead
        title="امکانات و ویژگی‌های پنل پیامک موج پیام | راهنمای کامل"
        description="آشنایی کامل با تمام امکانات و ویژگی‌های پیشرفته پنل پیامک موج پیام: ارسال انبوه، پیامک منطقه‌ای، گزارش‌گیری، وب‌سرویس، پیامک صوتی و بیش از ۲۰ قابلیت حرفه‌ای دیگر."
        keywords="امکانات پنل پیامک, ویژگی‌های موج پیام, ارسال انبوه پیامک, پیامک منطقه‌ای, گزارش‌گیری پیامک, وب‌سرویس پیامک, پیامک صوتی, API پیامک"
        url="https://moojpayam.ir/features"
      />

      <div className="py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-blue-100 text-primary-500 px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-5 h-5 ml-2" />
              <span className="font-semibold">امکانات کامل</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              همه{" "}
              <span className="text-primary-500 relative">
                امکانات
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500/30 rounded-full"></span>
              </span>{" "}
              پنل پیامک موج پیام
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              با بیش از ۲۰ قابلیت حرفه‌ای و پیشرفته، پنل پیامک موج پیام تمام نیازهای بازاریابی پیامکی شما را پوشش می‌دهد
            </motion.p>
          </div>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary-500">
                خانه
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">امکانات</span>
            </div>
          </motion.nav>

          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    benefits={feature.benefits}
                    delay={index * 0.1}
                    category={feature.category}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ویژگی‌های اضافی
              </h2>
              <p className="text-xl text-gray-600">
                قابلیت‌های بیشتری که کار شما را آسان‌تر می‌کنند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-3 ml-4">
                      <div className="text-primary-500">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                آماده تجربه این امکانات هستید؟
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                همین امروز پنل پیامک خود را راه‌اندازی کنید و از تمام این قابلیت‌های حرفه‌ای استفاده کنید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  target="_blank"
                  href="http://dash.moojpayam.ir/userregister.aspx"
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
                  rel="noreferrer"
                >
                  شروع رایگان
                </a>
                <Link
                  to="/#pricing"
                  className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors text-lg flex items-center justify-center"
                >
                  مشاهده تعرفه‌ها
                  <ArrowLeft size={20} className="mr-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              <ArrowLeft size={20} className="ml-2" />
              بازگشت به صفحه اصلی
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;