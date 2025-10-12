import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: "چگونه می‌توانم پنل پیامک تبلیغاتی خریداری کنم؟",
      answer:
        "برای خرید یک پنل پیامک تبلیغاتی، کافی است مراحل ساده زیر را دنبال کنید. ابتدا به وب‌سایت موج پیام (moojpayam.ir) مراجعه کرده و با ثبت‌نام رایگان، فرآیند را آغاز کنید. سپس بسته‌ای متناسب با نیاز خود، مانند پنل ارسال پیامک انبوه، انتخاب کنید و پرداخت را انجام دهید. پس از تأیید پرداخت، پنل شما فعال می‌شود و می‌توانید از خدمات اس ام اس تبلیغاتی برای تبلیغات بهره‌مند شوید.",
    },
    {
      question:
        "آیا امکان ارسال پیامک تبلیغاتی به شماره‌های بلک لیست وجود دارد؟",
      answer:
        "خیر، مطابق با قوانین ارسال پیامک وضع‌شده توسط وزارت ارتباطات، ارسال پیامک تبلیغاتی به شماره‌هایی که در شماره‌های مسدود شده قرار دارند، امکان‌پذیر نیست. این شماره‌ها شامل افرادی است که درخواست عدم دریافت پیامک‌های تبلیغاتی را داده‌اند. برای رعایت قوانین پیامکی ایران، از سامانه‌های معتبر مانند موج پیام استفاده کنید تا از ارسال به شماره‌های غیرمجاز جلوگیری شود.",
    },
    {
      question: "تفاوت پیامک تبلیغاتی و خدماتی چیست؟",
      answer:
        "پیامک تبلیغاتی برای اهداف تبلیغات پیامکی و بازاریابی محصولات و خدمات استفاده می‌شود و معمولاً از خطوط پیامکی 1000 یا 2000 ارسال می‌شود. در مقابل، پیامک خدماتی برای اطلاع‌رسانی پیامکی به مشتریان فعلی، مثل وضعیت سفارش، پرداخت قبض یا یادآوری قرار، طراحی شده و از خطوط پیامکی 3000 یا 9000 ارسال می‌گردد. برای ارسال پیامک حرفه‌ای، از سامانه ارسال پیامک موج پیام استفاده کنید",
    },
    {
      question: "چگونه می‌توانم به پنل خود اعتبار اضافه کنم؟",
      answer:
        "برای افزایش اعتبار پنل پیامکی، مراحل زیر را دنبال کنید: به صفحه شخصی خود در سامانه پیامکی وارد شوید.از بخش شارژ پنل، مبلغ مورد نظر را انتخاب کنید. پرداخت آنلاین را انجام دهید؛ اعتبار شما بلافاصله پس از تأیید افزایش می‌یابد. برای خرید اعتبار پیامک آسان، از موج پیام استفاده کنید!",
    },
    {
      question: "آیا امکان ارسال پیامک زمانبندی شده وجود دارد؟",
      answer:
        "بله، با استفاده از پنل پیامکی، می‌توانید ارسال پیامک زمانبندی‌شده را انجام دهید. کافی است پیام‌های خود را از قبل تنظیم کرده و برنامه‌ریزی پیامک را برای زمان مشخصی در آینده انجام دهید. این زمان‌بندی پیامک برای موارد زیر بسیار مفید است: تبریک مناسبت‌ها با یادآوری پیامکی.یادآوری رویدادها برای مشتریان.اجرای کمپین تبلیغاتی پیامکی در زمان مناسب.برای تجربه بهتر، از سامانه ارسال پیامک موج پیام استفاده کنید!",
    },
    {
      question:
        "آیا می‌توانم از پنل پیامک برای ارسال پیام‌های شخصی‌سازی شده استفاده کنم؟",
      answer:
        "بله، با پنل پیامک ما، امکان شخصی‌سازی پیامک فراهم است. این سامانه به شما اجازه می‌دهد با استفاده از متغیرهای پیامکی مانند:نام و نام خانوادگی،تاریخ تولد،سایر اطلاعات مخاطبان از طریق مدیریت مخاطبان،پیامک اختصاصی برای هر فرد ارسال کنید. این قابلیت با ارسال پیامک هدفمند، تجربه بهتری برای کاربران ایجاد می‌کند. برای شروع، از سامانه پیامکی موج پیام استفاده کنید!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-4 text-gray-800"
          >
            سوالات <span className="text-primary-500">متداول</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            پاسخ سوالات رایج درباره سرویس پیامک تبلیغاتی موج پیام
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 last:mb-0"
            >
              <div
                className={`bg-white rounded-lg shadow-sm overflow-hidden border ${
                  activeIndex === index
                    ? "border-primary-300"
                    : "border-gray-200"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-right"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-primary-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">هنوز سوال دیگری دارید؟</p>
          <a href="/faq" className="btn btn-primary">
            مشاهده راهمنای کامل
          </a>
        </div>
      </div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FaqSection;
