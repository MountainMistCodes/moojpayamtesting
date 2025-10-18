import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  MessageSquare,
  Shield,
  CreditCard,
  Settings,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { FaTelegramPlane } from "react-icons/fa";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  helpful?: boolean;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const FaqPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  const categories: FaqCategory[] = [
    {
      id: "همه",
      name: "همه سوالات",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "bg-gray-100 text-gray-700",
      description: "تمام سوالات متداول",
    },
    {
      id: "شروع",
      name: "شروع کار",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-cyan-100 text-cyan-700",
      description: "نحوه شروع و راه‌اندازی",
    },
    {
      id: "پیامک",
      name: "ارسال پیامک",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "bg-green-100 text-green-700",
      description: "نحوه ارسال و مدیریت پیامک‌ها",
    },
    {
      id: "امنیت",
      name: "امنیت و قوانین",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-100 text-red-700",
      description: "قوانین و مسائل امنیتی",
    },
    {
      id: "پرداخت",
      name: "پرداخت و تعرفه",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-700",
      description: "مسائل مالی و تعرفه‌ها",
    },
    {
      id: "فنی",
      name: "مسائل فنی",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-700",
      description: "راه‌اندازی و مشکلات فنی",
    },
  ];

  const faqItems: FaqItem[] = [
    // شروع کار
    {
      id: "start-1",
      question: "چگونه می‌توانم پنل پیامک تبلیغاتی خریداری کنم؟ 📩",
      answer:
        "برای خرید پنل پیامک تبلیغاتی، مراحل زیر را دنبال کنید:\nثبت‌نام در سایت ✍️: ابتدا در سایت موج پیام ثبت‌نام کنید تا دسترسی به پنل پیامک تبلیغاتی خود را آغاز کنید.\n2. انتخاب پلن 📋: یکی از پلن‌های متناسب با نیازهای تبلیغاتی خود را از بخش تعرفه‌ها انتخاب کنید.\n3. پرداخت 💳: پرداخت را از طریق درگاه‌های امن بانکی انجام دهید تا فرآیند خرید پنل پیامک تبلیغاتی تکمیل شود.\n4. فعال‌سازی ✅: بلافاصله پس از تایید پرداخت، پنل پیامک تبلیغاتی شما در موج پیام فعال می‌شود.\n\nدر صورت نیاز به راهنمایی بیشتر در خرید پنل پیامک تبلیغاتی، تیم پشتیبانی موج پیام آماده کمک به شما است! 🤝",
      category: "شروع",
      tags: ["خرید", "ثبت‌نام", "پرداخت"],
    },
    {
      id: "start-2",
      question: "آیا امکان تست رایگان پنل پیامک تبلیغاتی وجود دارد؟ 🤔",
      answer:
        "بله! موج پیام امکانات زیر را برای تست رایگان پنل پیامک تبلیغاتی ارائه می‌دهد:\n\n• شارژ اولیه رایگان 💰: با هر پلن، شارژ اولیه رایگان دریافت می‌کنید تا پنل پیامک تبلیغاتی را بدون هزینه امتحان کنید.\n• مشاوره رایگان 💬: کارشناسان ما راهنمایی کاملی برای استفاده از پنل پیامک تبلیغاتی ارائه می‌دهند.\n• ضمانت بازگشت وجه 🔄: در صورت عدم رضایت از پنل پیامک تبلیغاتی، وجه شما بازگردانده می‌شود.\n\nبرای دریافت دسترسی تست رایگان پنل پیامک تبلیغاتی، با پشتیبانی موج پیام تماس بگیرید! 📞",
      category: "شروع",
      tags: ["تست", "رایگان", "دمو"],
    },
    {
      id: "start-3",
      question: "چه مدارکی برای ثبت‌نام در پنل پیامک تبلیغاتی نیاز است؟ 📝",
      answer:
        "برای ثبت‌نام در پنل پیامک تبلیغاتی موج پیام، مدارک زیر مورد نیاز است:\nبرای اشخاص حقیقی 🙍‍♂️:\n\nتصویر کارت ملی به نام صاحب پنل پیامک تبلیغاتی 📇\nتصویر سلفی به همراه کارت ملی و کد شناسه مندرج در برگه با امضا و تاریخ روز 📸\nشماره موبایل معتبر 📱\nآدرس ایمیل ✉️\n\nبرای پنل‌های حقوقی 🏢:\nسازمان‌های دولتی:\nتصویر کارت ملی نماینده سازمان 📇\nتصویر معرفی‌نامه نماینده سازمان 📄\n\nسازمان‌های خصوصی:\nتصویر کارت ملی مدیرعامل 📇\nتصویر آخرین روزنامه رسمی 📰\n\nنکته مهم ⚠️: تمام مدارک باید واضح و خوانا باشند و اطلاعات آن‌ها با اطلاعات ثبت‌نامی در پنل پیامک تبلیغاتی موج پیام مطابقت داشته باشد.",
      category: "شروع",
      tags: ["مدارک", "ثبت‌نام", "احراز هویت"],
    },

    // ارسال پیامک
    {
      id: "sms-1",
      question:
        "آیا امکان ارسال پیامک تبلیغاتی به شماره‌های بلک لیست وجود دارد؟ 🚫",
      answer:
        "خیر، مطابق با قوانین وزارت ارتباطات، ارسال پیامک تبلیغاتی به شماره‌های بلک لیست در پنل پیامک تبلیغاتی موج پیام امکان‌پذیر نیست.\nدر صورت نیاز به ارسال به بلک لیست، خط تبلیغاتی را به خدماتی تبدیل کنید و فقط برای مواردی مانند (وضعیت سفارش، یادآوری قرار، تایید پرداخت) استفاده نمایید.\n\nدلایل این محدودیت: 🔒\n• احترام به حریم خصوصی کاربران 👤\n• رعایت قوانین ملی ارتباطات ⚖️\n• جلوگیری از اسپم 🛡\n\nراه‌حل‌های جایگزین: 💡\n• استفاده از لیست‌های تمیز و به‌روز 📋\n• ارسال پیامک خدماتی به مشتریان فعلی 👥\n• دریافت رضایت صریح از مخاطبان ✅\n\nنکته ⚠️: شماره‌هایی که درخواست عدم دریافت پیامک تبلیغاتی داده‌اند، در لیست سیاه قرار می‌گیرند.",
      category: "پیامک",
      tags: ["بلک لیست", "قوانین", "تبلیغاتی"],
    },
    {
      id: "sms-2",
      question: "تفاوت پیامک تبلیغاتی و خدماتی چیست؟ 📩",
      answer:
        "پیامک تبلیغاتی 📢\n• هدف: معرفی و تبلیغ محصولات، آفرها و تخفیف‌ها برای جذب مخاطبان جدید.\n• خطوط ارسال: از سرشماره‌های تبلیغاتی مانند 1000، 2000، 3000، 5000 در پنل پیامک تبلیغاتی موج پیام.\n• مخاطبان: عموم مردم (لیست مخاطبان هدف).\n• محدودیت‌ها: امکان ارسال به شماره‌های بلک لیست وجود ندارد، مگر خط تبلیغاتی به خدماتی تبدیل شود. 🚫\n• زمان ارسال: فقط در ساعات مجاز (طبق مقررات مخابرات). ⏰\n\nپیامک خدماتی 📬\n• هدف: اطلاع‌رسانی به مشتریان فعلی (پیگیری سفارش، یادآوری، تأیید پرداخت و غیره).\n• خطوط ارسال: از خطوط خدماتی شده (مثل 1000، 2000، 3000 یا 9000) در پنل پیامک تبلیغاتی موج پیام.\n• مخاطبان: مشتریان ثبت‌شده که رضایت خود را برای دریافت پیام اعلام کرده‌اند.\n• کاربردها: قابلیت ارسال به بلک لیست برای پیام‌های خدماتی، زیرا گیرنده موافقت کرده است. ✅\n• زمان ارسال: معمولاً ۲۴ ساعته، بدون محدودیت زمانی (بسته به سامانه پیامکی و مقررات). 🌙\n\nتوصیه 💡:\nبرای بهترین نتیجه در پنل پیامک تبلیغاتی موج پیام، از پیامک تبلیغاتی برای جذب مشتریان جدید و از پیامک خدماتی برای حفظ ارتباط با مشتریان فعلی و اطلاع‌رسانی موثر استفاده کنید! 🤝",
      category: "پیامک",
      tags: ["تبلیغاتی", "خدماتی", "تفاوت"],
    },
    {
      id: "sms-3",
      question: "آیا امکان ارسال پیامک زمان‌بندی شده وجود دارد؟ ⏰",
      answer:
        "بله! پنل پیامک تبلیغاتی موج پیام امکانات پیشرفته‌ای برای زمان‌بندی پیامک ارائه می‌دهد:\nقابلیت‌های زمان‌بندی 🕒:\n• ارسال پیامک در تاریخ و ساعت مشخص 📅\n• تکرار پیامک به‌صورت روزانه، هفتگی یا ماهانه 🔄\n• ارسال پیام در مناسبت‌های خاص 🎉\n• زمان‌بندی چندگانه برای کمپین‌های مختلف 📊\nکاربردهای عملی 💼:\n• ارسال پیام تبریک تولد به مشتریان 🎂\n• یادآوری رویدادها و قرارهای مهم 📌\n• اجرای کمپین‌های فصلی و مناسبتی 🛍\n• ارسال پیام در بهترین ساعات روز برای حداکثر اثربخشی 🌞\nنکته ⚠️: سیستم موج پیام به‌صورت خودکار پیام‌ها را در زمان تعیین‌شده ارسال می‌کند، حتی اگر آنلاین نباشید! 🚀\nبرای تنظیم ارسال زمان‌بندی شده، کافی است وارد پنل پیامک تبلیغاتی موج پیام شوید و تنظیمات موردنظر خود را اعمال کنید.",
      category: "پیامک",
      tags: ["زمانبندی", "خودکار", "تکرار"],
    },
    {
      id: "sms-4",
      question:
        "آیا می‌توانم از پنل پیامک تبلیغاتی برای ارسال پیام‌های شخصی‌سازی شده استفاده کنم؟ 📬✨",
      answer:
        'بله! پنل پیامک تبلیغاتی موج پیام امکانات قدرتمندی برای ارسال پیام‌های شخصی‌سازی شده ارائه می‌دهد:\nمتغیرهای قابل استفاده 🔑:\n• {نام} - نام مخاطب\n• {نام_خانوادگی} - نام خانوادگی\n• {تاریخ_تولد} - تاریخ تولد\n• {شهر} - شهر محل سکونت\n• {کد_ملی} - کد ملی (در صورت وجود)\nمثال عملی 💬:\n"سلام {نام} عزیز! تخفیف ویژه {شهر} برای شما آماده شده. کد تخفیف: CITY20"\nمزایا 🚀:\n• افزایش نرخ پاسخ تا ۴۰٪ 📈\n• ایجاد حس شخصی و صمیمی با مخاطب 🤝\n• بهبود تجربه مشتری 😊\n• افزایش اعتماد و وفاداری مشتریان 💖\nراهنمایی 💡:\nبرای استفاده از قابلیت شخصی‌سازی، در بخش ایجاد پیام پنل پیامک تبلیغاتی موج پیام، از گزینه "متغیرها" استفاده کنید و اطلاعات مخاطبان را به‌درستی وارد نمایید.',
      category: "پیامک",
      tags: ["شخصی‌سازی", "متغیر", "نام"],
    },

    // امنیت و قوانین
    {
      id: "security-1",
      question:
        "آیا ارسال پیامک از پنل پیامک تبلیغاتی موج پیام قانونی و مجاز است؟ ✅",
      answer:
        "بله، ارسال پیامک از طریق پنل پیامک تبلیغاتی موج پیام کاملاً قانونی و مجاز است:\nمجوزهای رسمی 📝:\n• دارای مجوز رسمی از وزارت ارتباطات و فناوری اطلاعات 🏛\n• مجهز به نماد اعتماد الکترونیکی (اینماد) 🛡\n• رعایت کامل قوانین و مقررات ملی ⚖️\nتعهدات موج پیام 🤝:\n• عدم ارسال پیامک به شماره‌های بلک لیست 🚫\n• رعایت ساعات مجاز ارسال پیامک تبلیغاتی ⏰\n• حفظ حریم خصوصی کاربران 🔒\n• ارائه خدمات با شفافیت کامل 🌟\nمسئولیت مشتریان 👤:\n• ارسال محتوای قانونی و مطابق با مقررات 📄\n• رعایت حقوق مخاطبان و دریافت رضایت آن‌ها 🙌\n• پرهیز از ارسال پیام‌های اسپم 🚫\nتعهد موج پیام 💼:\nما در پنل پیامک تبلیغاتی موج پیام متعهد به ارائه خدمات کاملاً قانونی، اخلاقی و حرفه‌ای هستیم تا تجربه‌ای امن و مطمئن برای شما فراهم کنیم! 😊",
      category: "امنیت",
      tags: ["قانونی", "مجوز", "وزارت ارتباطات"],
    },
    {
      id: "security-2",
      question: "اطلاعات من در پنل پیامک تبلیغاتی موج پیام چقدر امن است؟ 🔒",
      answer:
        "امنیت اطلاعات شما اولویت اصلی پنل پیامک تبلیغاتی موج پیام است:\nتدابیر امنیتی 🛡:\n• استفاده از رمزنگاری SSL برای تمام ارتباطات 🔐\n• سرورهای امن در دیتاسنترهای معتبر 🌐\n• کنترل دسترسی چندمرحله‌ای برای جلوگیری از نفوذ 🚨\nحفاظت از داده‌ها 📊:\n• عدم اشتراک‌گذاری اطلاعات با اشخاص ثالث 🚫\n• رمزنگاری پایگاه داده برای امنیت بیشتر 🔒\n• نظارت ۲۴ ساعته بر سیستم 🕒\n• رعایت پروتکل‌های امنیتی بین‌المللی 🌍\nحقوق شما 👤:\n• دسترسی کامل به اطلاعات شخصی خود 📄\n• امکان درخواست حذف اطلاعات 🗑\n• کنترل کامل بر داده‌هایتان در پنل پیامک تبلیغاتی 🎮\nتعهد موج پیام 🤝:\nما در پنل پیامک تبلیغاتی موج پیام متعهد به حفظ حریم خصوصی و امنیت اطلاعات شما هستیم تا با خیال راحت از خدمات ما استفاده کنید! 😊",
      category: "امنیت",
      tags: ["امنیت", "حریم خصوصی", "SSL"],
    },

    // پرداخت و تعرفه
    {
      id: "payment-1",
      question:
        "چگونه می‌توانم به پنل پیامک تبلیغاتی موج پیام اعتبار اضافه کنم؟ 💳",
      answer:
        'وارد پنل کاربری خود در موج پیام شوید 🔐\nاز منوی اصلی، گزینه "افزایش اعتبار" را انتخاب کنید 🖱\nمبلغ موردنظر را وارد کنید 💵\nروش پرداخت را انتخاب کنید 🏦\nپرداخت را تکمیل کنید ✅\n\nروش‌های پرداخت 💸:\n• درگاه پرداخت آنلاین (سریع و امن) 🌐\n• واریز کارت به کارت 💳\n\nزمان واریز ⏰:\nدر صورت استفاده از درگاه پرداخت آنلاین، اعتبار پنل پیامک تبلیغاتی شما بلافاصله پس از تأیید پرداخت افزایش می‌یابد! 🚀\n\nتوصیه 💡:\nبرای سهولت و سرعت بیشتر، از درگاه پرداخت آنلاین استفاده کنید تا بدون تأخیر از خدمات پنل پیامک تبلیغاتی موج پیام بهره‌مند شوید.',
      category: "پرداخت",
      tags: ["اعتبار", "شارژ", "پرداخت"],
    },
    {
      id: "payment-2",
      question:
        "آیا امکان بازگشت وجه در پنل پیامک تبلیغاتی موج پیام وجود دارد؟ 💰🔄",
      answer:
        "بله، پنل پیامک تبلیغاتی موج پیام سیاست منصفانه‌ای برای استرداد وجه ارائه می‌دهد:\nشرایط استرداد 📜:\n• ثبت درخواست ظرف ۷۲ ساعت اول پس از خرید ⏰\n• استفاده کمتر از ۱۰٪ از اعتبار خریداری‌شده 📉\n• عدم نقض قوانین و مقررات موج پیام 🚫\nمراحل درخواست استرداد 📋:\n• ارسال درخواست از طریق تیکت پشتیبانی در پنل موج پیام 🎫\n• ارائه دلیل درخواست استرداد ✍️\n• بررسی درخواست توسط تیم مالی 🕵️‍♂️\n• واریز وجه در صورت تأیید 💸\n\nزمان‌بندی ⏳:\n• بررسی درخواست: ۳-۵ روز کاری 🗓\n• واریز وجه: ۷-۱۰ روز کاری 💳\n\nتعهد موج پیام 🤝:\nما در پنل پیامک تبلیغاتی موج پیام متعهد به جلب رضایت کامل مشتریان هستیم و با ارائه سیاست استرداد منصفانه، خیال شما را راحت می‌کنیم! 😊",
      category: "پرداخت",
      tags: ["استرداد", "بازگشت وجه", "ضمانت"],
    },

    // مسائل فنی
    {
      id: "tech-1",
      question:
        "چگونه پنل پیامک تبلیغاتی موج پیام را به وب‌سایت خود متصل کنم؟ 🌐",
      answer:
        "اتصال پنل پیامک تبلیغاتی موج پیام به وب‌سایت شما به‌راحتی از طریق وب‌سرویس امکان‌پذیر است:\nمراحل اتصال 🔌:\n• وارد پنل کاربری موج پیام شوید و به بخش توسعه‌دهندگان بروید 🖥\n• در قسمت وب‌سرویس و API، کلیدهای API و مستندات مربوطه را دریافت کنید 📜\n• با استفاده از کدهای نمونه و مستندات، پنل پیامک تبلیغاتی را به وب‌سایت خود متصل کنید 🛠\n• برای وب‌سایت‌های وردپرسی، از افزونه‌های پیامکی وردپرس استفاده کنید تا اتصال ساده‌تر شود 📲\n\nخدمات پشتیبانی 🤝:\n• راهنمایی کامل توسط تیم فنی موج پیام 🧑‍💻\n• ارائه کدهای نمونه آماده برای سهولت در اتصال 💻\n\nتوصیه 💡:\nبرای اتصال سریع و بدون خطا، مستندات API را به‌دقت مطالعه کنید یا با تیم پشتیبانی موج پیام تماس بگیرید تا شما را در فرآیند اتصال پنل پیامک تبلیغاتی به وب‌سایت راهنمایی کنند! 😊",
      category: "فنی",
      tags: ["وب‌سرویس", "API", "اتصال"],
    },
    {
      id: "tech-2",
      question:
        "چرا پیامک‌های ارسالی از پنل پیامک تبلیغاتی موج پیام تحویل نمی‌شوند؟ 📩",
      answer:
        "دلایل مختلفی ممکن است باعث عدم تحویل پیامک‌های شما شوند:\nدلایل رایج 🚫:\n• شماره گیرنده خاموش یا خارج از دسترس است 📴\n• شماره نامعتبر یا اشتباه وارد شده است ❌\n• صندوق پیامک گیرنده پر است 📥\n• فیلتر شدن پیام توسط اپراتور (به دلیل محتوای غیرمجاز یا بلک لیست) 🚨\nراه‌حل‌ها 🛠:\n• بررسی صحت شماره‌های مخاطبان قبل از ارسال ✅\n• استفاده از لیست‌های تمیز و به‌روز مخاطبان 📋\n• ارسال پیامک در ساعات مناسب (مطابق مقررات مخابرات) ⏰\n• بررسی گزارش‌های تفصیلی در پنل موج پیام برای شناسایی مشکلات 📊\nابزارهای کمکی در پنل موج پیام 🧰:\n• گزارش وضعیت تحویل لحظه‌ای برای رصد دقیق پیام‌ها 📈\n• تحلیل دلایل عدم تحویل برای بهبود عملکرد 🔍\n• پیشنهادات هوشمند برای بهینه‌سازی کمپین‌های پیامکی 💡\nپشتیبانی 🤝:\nتیم فنی پنل پیامک تبلیغاتی موج پیام آماده بررسی مشکلات خاص شما و ارائه راهکارهای اختصاصی است. کافی است از طریق تیکت پشتیبانی با ما در ارتباط باشید! 😊\nتوصیه 💡:\nبرای جلوگیری از مشکلات تحویل، همیشه از صحت شماره‌ها مطمئن شوید و محتوای پیامک را مطابق با قوانین اپراتور تنظیم کنید.",
      category: "فنی",
      tags: ["تحویل", "مشکل", "عیب‌یابی"],
    },

    // سوالات عمومی
    {
      id: "general-1",
      question:
        "آیا امکان ارسال پیامک صوتی در پنل پیامک تبلیغاتی موج پیام وجود دارد؟ 🎧",
      answer:
        "بله! پنل پیامک تبلیغاتی موج پیام سرویس پیشرفته پیامک صوتی ارائه می‌دهد:\nامکانات پیامک صوتی 🔊:\n• تبدیل متن به گفتار فارسی با صدای طبیعی 🗣\n• آپلود فایل صوتی دلخواه (فرمت‌های MP3 و WAV) 📂\n• ارسال انبوه پیامک صوتی به مخاطبان هدف 📢\n• کیفیت صوتی HD برای تجربه‌ای شفاف و حرفه‌ای 🎵\nمزایا 🌟:\n• تأثیرگذاری بیشتر نسبت به پیامک متنی 📈\n• مناسب برای افراد کم‌سواد یا مخاطبان خاص 👥\n• امکان انتقال احساسات و پیام‌های شخصی‌سازی‌شده 😊\n• نرخ گوش دادن بالا برای جذب بیشتر مخاطب 📞\nمحدودیت‌ها ⚠️:\n• حداکثر مدت زمان پیام صوتی: ۳۰ ثانیه ⏱️\n• فرمت‌های پشتیبانی‌شده: MP3 و WAV 🎶\n• هزینه بالاتر نسبت به پیامک متنی 💸\nراهنمایی 💡:\nبرای ارسال پیامک صوتی، وارد پنل پیامک تبلیغاتی موج پیام شوید و از بخش پیامک صوتی استفاده کنید. کافی است متن یا فایل صوتی خود را بارگذاری کرده و تنظیمات ارسال را انجام دهید! 🚀",
      category: "پیامک",
      tags: ["صوتی", "گفتار", "آپلود"],
    },
    {
      id: "general-2",
      question:
        "چگونه می‌توانم نرخ موفقیت کمپین‌های پیامکی در پنل موج پیام را افزایش دهم؟ 📈",
      answer:
        "برای افزایش نرخ موفقیت کمپین‌های پیامک تبلیغاتی در پنل موج پیام، این نکات کلیدی را دنبال کنید:\nبهینه‌سازی محتوا ✍️:\n• متن کوتاه و مفید (حداکثر ۱۶۰ کاراکتر) برای جلب توجه سریع 📝\n• استفاده از کلمات کلیدی جذاب مرتبط با پنل پیامک تبلیغاتی 🎯\n• فراخوان واضح به عمل (CTA) مانند «همین حالا تماس بگیرید!» 📞\n• شخصی‌سازی پیام‌ها با متغیرهایی مثل {نام} برای ارتباط صمیمی‌تر 😊\nزمان‌بندی هوشمند ⏰:\n• ارسال پیامک در ساعات پربازده (۹-۱۲ صبح و ۱۶-۱۹ عصر) 🌞\n• اجتناب از ارسال در ایام تعطیل رسمی 📅\n• توجه به منطقه زمانی مخاطبان برای حداکثر تأثیر 🕒\nهدف‌گیری دقیق 🎯:\n• استفاده از فیلترهای جمعیت‌شناختی (سن، جنسیت، مکان) در پنل موج پیام 📊\n• تقسیم‌بندی مخاطبان بر اساس رفتار خرید یا علایق 🛒\n• ارسال پیامک‌های منطقه‌ای برای هدف‌گیری محلی 🗺\nاندازه‌گیری و بهبود 📉:\n• تحلیل گزارش‌های تفصیلی در پنل پیامک تبلیغاتی موج پیام برای بررسی عملکرد 📈\n• اجرای تست A/B برای مقایسه نسخه‌های مختلف پیام 🧪\n• پیگیری نرخ تبدیل برای ارزیابی موفقیت کمپین 📋\nتوصیه 💡:\nاز ابزارهای تحلیلی پنل موج پیام برای رصد نرخ تحویل و پاسخ استفاده کنید و با تست مداوم پیام‌ها، بهترین استراتژی را برای کمپین‌های پیامک تبلیغاتی خود پیدا کنید! 🚀",
      category: "پیامک",
      tags: ["بهینه‌سازی", "نرخ موفقیت", "کمپین"],
    },

    // پشتیبانی
    {
      id: "support-1",
      question:
        "چگونه می‌توانم با پشتیبانی پنل پیامک تبلیغاتی موج پیام تماس بگیرم؟ 📞",
      answer:
        "تیم پشتیبانی پنل پیامک تبلیغاتی موج پیام به‌صورت ۲۴/۷ آماده کمک به شماست:\nراه‌های ارتباطی 🌐:\n• تیکت آنلاین: از طریق پنل کاربری در سایت موج پیام 🎫\n• ایمیل: contact@moojpayam.ir✉️\n• تلگرام: @moojpayam_support (سریع‌ترین راه برای پاسخگویی) 💬\nساعات کاری ⏰:\n• پشتیبانی آنلاین: ۲۴ ساعته، هر روز هفته 🌙\n• پشتیبانی تلفنی: ۸ صبح تا ۱۰ شب ☎️\nنکته ⚠️:\nبرای دریافت پاسخ سریع‌تر، شماره پنل و توضیح کامل مشکل یا سؤال خود را هنگام تماس ارائه دهید. 📝\nتوصیه 💡:\nبرای مسائل فوری، از طریق تلگرام یا تیکت آنلاین با تیم پشتیبانی موج پیام ارتباط برقرار کنید تا در کوتاه‌ترین زمان به شما پاسخ دهیم! 🚀",
      category: "فنی",
      tags: ["پشتیبانی", "تماس", "راهنمایی"],
    },

    // سوالات پیشرفته
    {
      id: "advanced-1",
      question:
        "آیا امکان ارسال پیامک منطقه‌ای در پنل پیامک تبلیغاتی موج پیام وجود دارد؟ 🗺",
      answer:
        "بله! پنل پیامک تبلیغاتی موج پیام قابلیت ارسال پیامک منطقه‌ای را به‌صورت پیشرفته ارائه می‌دهد:\nقابلیت‌های ارسال منطقه‌ای 📍:\n• انتخاب منطقه موردنظر از روی نقشه تعاملی 🗺\n• فیلتر مخاطبان بر اساس کد پستی 📮\n• تقسیم‌بندی بر اساس شهر یا استان 🏙\n• تعیین شعاع جغرافیایی برای هدف‌گیری دقیق 🎯\nکاربردهای عملی 💼:\n• تبلیغ برای فروشگاه‌ها و کسب‌وکارهای محلی 🏪\n• اطلاع‌رسانی رویدادها و همایش‌های منطقه‌ای 🎉\n• ارائه خدمات درب منزل در مناطق خاص 🚚\n• اجرای کمپین‌های تبلیغاتی شهری 🌆\nمزایا 🌟:\n• افزایش نرخ تبدیل تا ۳۰۰٪ 📈\n• کاهش هزینه‌های تبلیغاتی با هدف‌گیری دقیق 💸\n• جذب مخاطبان مرتبط‌تر با کسب‌وکار شما 👥\n• دریافت بازخورد بهتر از مشتریان 😊\nراهنمایی 💡:\nبرای استفاده از این قابلیت، وارد پنل پیامک تبلیغاتی موج پیام شوید و از بخش ارسال منطقه‌ای تنظیمات موردنظر خود را اعمال کنید. کافی است منطقه دلخواه را انتخاب کرده و پیام خود را ارسال کنید! 🚀",
      category: "پیامک",
      tags: ["منطقه‌ای", "نقشه", "جغرافیایی"],
    },
    {
      id: "advanced-2",
      question:
        "آیا می‌تونید سیستم‌تون رو با CRM و ابزارهای مدیریت ادغام کنید؟ 🤔",
      answer:
        'جواب یه "بله" قاطعانه‌ست! ✅ موج پیام با قابلیت‌های ادغام فوق‌العاده، کار شما رو راحت می‌کنه! 😍\n\nسیستم‌هایی که پشتیبانی می‌کنیم:\n- CRMهای پرطرفدار (مثل Salesforce و HubSpot) 🛠\n- فروشگاه‌های آنلاین (ووکامرس، مگنتو) 🛒\n- نرم‌افزارهای حسابداری 💰\n- سیستم‌های مدیریت مشتری 👥\n\nچطور ادغام می‌کنیم؟ 🛠\n- API RESTful قدرتمند ⚙️\n- Webhook برای رویدادهای لحظه‌ای 📡\n- فایل‌های CSV/Excel 📊\n- اتصال مستقیم به پایگاه داده 🗄\n\nچرا ادغام با ما یه انتخاب هوشمندانه‌ست؟ 🌟\n- خودکارسازی فرآیندها برای صرفه‌جویی در وقت ⏰\n- همگام‌سازی سریع و بی‌دردسر اطلاعات 🔄\n- کاهش خطاهای انسانی 🙅‍♂️\n- افزایش بهره‌وری تیم شما 🚀\n\nپشتیبانی حرفه‌ای: تیم ما همیشه کنار شماست تا راه‌اندازی و پیکربندی رو آسون کنه! 🤝',
      category: "فنی",
      tags: ["CRM", "ادغام", "API"],
    },

    // سوالات خاص
    {
      id: "specific-1",
      question: "می‌تونید شب‌ها پیامک بفرستید؟ 🌙",
      answer:
        "بله، اما با یه سری نکات مهم! 📱 ارسال پیامک در ساعات شب قانون‌های خاص خودش رو داره که ما حسابی رعایتشون می‌کنیم! 🛡\n\nقوانین ارسال پیامک:\n- پیامک تبلیغاتی 📣: فقط از ۸ صبح تا ۸ شب.\n- پیامک خدماتی 🛠: برای مشتریان فعلی، ۲۴ ساعته بدون محدودیت!\n- پیامک اضطراری 🚨: هر زمان که نیاز باشه، بدون معطلی.\n\nچه پیام‌هایی استثنا هستند؟ 🎯\n- اطلاع‌رسانی‌های فوری (مثل پزشکی یا امنیتی) 🚑\n- تأیید تراکنش‌های بانکی 💳\n- کدهای تأیید (OTP) 🔐\n- یادآوری‌های مهم (مثل قرار ملاقات) ⏰\n\nچند توصیه طلایی برای شما: 💡\n- ارسال‌ها رو برای ساعات مجاز برنامه‌ریزی کنید 🕒\n- از زمان‌بندی خودکار برای راحتی کار استفاده کنید ⚙️\n- آرامش شبانه مخاطبان‌تون رو حفظ کنید 😴\n\nیه نکته مهم: رعایت نکردن این قوانین ممکنه حساب‌تون رو به خطر بندازه! ⚠️",
      category: "امنیت",
      tags: ["ساعات ارسال", "شب", "قوانین"],
    },
    {
      id: "specific-2",
      question: "چطور از کمپین‌هام گزارش‌های دقیق و کامل بگیرم؟ 📊",
      answer:
        'با پنل موج پیام، همه‌چیز زیر نظر شماست! 🔍 گزارش‌های جامع و کاربردی ما به شما کمک می‌کنه تا عملکرد کمپین‌هاتون رو مثل یه حرفه‌ای تحلیل کنید! 💪\n\nچه گزارش‌هایی در اختیارتونه؟ 📈\n- گزارش ارسال 📤: تعداد پیام‌های ارسال‌شده، در انتظار و موفق ✅\n- گزارش تحویل 🚚: پیام‌های تحویل‌شده، عدم تحویل و دلایلش ❗️\n- گزارش مالی 💸: هزینه‌های کمپین و اعتبار باقی‌مانده 💰\n- گزارش عملکرد 🌟: نرخ باز شدن، کلیک و تبدیل به مشتری 📊\n\nفرمت‌های گزارش‌گیری چطوره؟ 🖥\n- مشاهده آنلاین با نمودارهای جذاب 📉\n- دانلود به‌صورت Excel یا CSV 📑\n- دریافت خودکار گزارش‌ها از طریق ایمیل 📧\n- دسترسی برنامه‌ای با API برای حرفه‌ای‌ها ⚙️\n\nتحلیل‌های پیشرفته برای برنده‌ها! 🏆\n- مقایسه عملکرد کمپین‌های مختلف 🔄\n- بررسی روند عملکرد در طول زمان ⏳\n- تحلیل جمعیت‌شناختی مخاطبان 🎯\n- پیشنهادهای هوشمند برای بهبود کمپین‌ها 💡\n\nاز کجا شروع کنم؟ همه گزارش‌ها در بخش "آمار و گزارش‌ها" پنل منتظر شماست! 🖱 فقط یه کلیک فاصله دارید! 😎',
      category: "فنی",
      tags: ["گزارش", "آمار", "تحلیل"],
    },
  ];

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const markAsHelpful = (id: string, helpful: boolean) => {
    setHelpfulVotes({ ...helpfulVotes, [id]: helpful });
    // In a real app, this would be sent to the server
  };

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "همه" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryData = (categoryId: string) =>
    categories.find((cat) => cat.id === categoryId);

  return (
    <>
      <SEOHead
        title="سوالات متداول | راهنمای کامل پنل پیامک موج پیام"
        description="پاسخ کامل به تمام سوالات متداول درباره پنل پیامک موج پیام: نحوه خرید، ارسال پیامک، قوانین، مسائل فنی، پرداخت و پشتیبانی. راهنمای جامع برای استفاده بهینه از خدمات."
        keywords="سوالات متداول پیامک, راهنمای پنل پیامک, آموزش ارسال پیامک, قوانین پیامک تبلیغاتی, مشکلات فنی پیامک, پشتیبانی موج پیام, FAQ SMS"
        url="https://moojpayam.ir/faq"
      />

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

      <div className="py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary-500">
                خانه
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">سوالات متداول</span>
            </div>
          </motion.nav>

          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-blue-100 text-primary-500 px-4 py-2 rounded-full mb-6"
            >
              <HelpCircle className="w-5 h-5 ml-2" />
              <span className="font-semibold">مرکز راهنمایی</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              سوالات{" "}
              <span className="text-primary-500 relative">
                متداول
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500/30 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              پاسخ کامل و جامع به تمام سوالات شما درباره خدمات پیامک موج پیام
            </motion.p>
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="جستجو در سوالات متداول..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none text-lg shadow-sm"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    selectedCategory === category.id
                      ? "bg-primary-500 text-white shadow-lg transform scale-105"
                      : `${category.color} hover:shadow-md hover:scale-105`
                  }`}
                >
                  {category.icon}
                  <span className="mr-2">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  نتیجه‌ای یافت نشد
                </h3>
                <p className="text-gray-500 mb-6">
                  لطفاً کلمات کلیدی دیگری را امتحان کنید یا دسته‌بندی دیگری
                  انتخاب کنید
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("همه");
                  }}
                  className="btn btn-primary"
                >
                  نمایش همه سوالات
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-right hover:bg-gray-50 transition-colors"
                      onClick={() => toggleAccordion(faq.id)}
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {faq.question}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              getCategoryData(faq.category)?.color ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {getCategoryData(faq.category)?.name ||
                              faq.category}
                          </span>
                          {faq.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mr-4">
                        {activeIndex === faq.id ? (
                          <ChevronUp className="text-primary-500" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="pt-4">
                              <div
                                className="text-gray-700 leading-relaxed whitespace-pre-line"
                                style={{ fontSize: "16px", lineHeight: "1.7" }}
                              >
                                {faq.answer}
                              </div>

                              {/* Helpful voting */}
                              <div className="mt-6 pt-4 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-gray-600">
                                    آیا این پاسخ مفید بود؟
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={() =>
                                        markAsHelpful(faq.id, true)
                                      }
                                      className={`flex items-center px-3 py-1 rounded-lg text-sm transition-colors ${
                                        helpfulVotes[faq.id] === true
                                          ? "bg-green-100 text-green-700"
                                          : "bg-gray-100 text-gray-600 hover:bg-green-50"
                                      }`}
                                    >
                                      <CheckCircle size={16} className="ml-1" />
                                      مفید بود
                                    </button>
                                    <button
                                      onClick={() =>
                                        markAsHelpful(faq.id, false)
                                      }
                                      className={`flex items-center px-3 py-1 rounded-lg text-sm transition-colors ${
                                        helpfulVotes[faq.id] === false
                                          ? "bg-red-100 text-red-700"
                                          : "bg-gray-100 text-gray-600 hover:bg-red-50"
                                      }`}
                                    >
                                      <AlertCircle size={16} className="ml-1" />
                                      مفید نبود
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white/20 rounded-full p-4 inline-flex mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  سوال شما پاسخ داده نشد؟
                </h2>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  تیم پشتیبانی ما ۲۴ ساعته آماده پاسخگویی به سوالات شما هستند.
                  از طریق راه‌های زیر با ما در تماس باشید.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                    <Phone className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">تماس تلفنی</h3>
                    <p className="text-sm opacity-90">پاسخگویی فوری</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                    <FaTelegramPlane className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">تلگرام </h3>
                    <p className="text-sm opacity-90">سریع ترین راه ارتباط</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                    <Mail className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">ایمیل</h3>
                    <p className="text-sm opacity-90">پاسخ در کمتر از ۲ ساعت</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact-us"
                    className="btn bg-white text-primary-600 hover:bg-gray-100"
                  >
                    تماس با پشتیبانی
                  </Link>
                  <a
                    href="https://t.me/moojpayam_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white/20 text-white hover:bg-white/30"
                  >
                    پشتیبانی تلگرام
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                لینک‌های مفید
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/features"
                  className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="bg-blue-100 rounded-lg p-3 ml-4 group-hover:bg-blue-200 transition-colors">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">امکانات کامل</h4>
                    <p className="text-sm text-gray-600">
                      مشاهده تمام ویژگی‌ها
                    </p>
                  </div>
                </Link>

                <Link
                  to="/#pricing"
                  className="flex items-center p-4 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="bg-green-100 rounded-lg p-3 ml-4 group-hover:bg-green-200 transition-colors">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">تعرفه‌ها</h4>
                    <p className="text-sm text-gray-600">
                      مشاهده قیمت‌ها و پلن‌ها
                    </p>
                  </div>
                </Link>

                <Link
                  to="/blog"
                  className="flex items-center p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="bg-purple-100 rounded-lg p-3 ml-4 group-hover:bg-purple-200 transition-colors">
                    <Info className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">راهنماها</h4>
                    <p className="text-sm text-gray-600">
                      مطالعه مقالات آموزشی
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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

export default FaqPage;
