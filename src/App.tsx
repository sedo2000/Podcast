import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, BookOpen, Quote } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-xl border border-stone-200 rounded-lg"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-stone-800 p-4 rounded-full">
              <Quote className="text-amber-400 h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center leading-tight">
            الفاشل بمرتبة الشرف
          </h1>

          <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-stone-700 mb-2 border-b border-stone-200 pb-2">المقدمة</h2>
              <p className="italic">
                "تدري شنو أصعب شعور؟ مو إنك تفشل.. لا، أصعب شعور هو إنك تضل واكف بمكانك، لا تقدمت خطوة ولا تراجعت خطوة. هذا النوع من البشر اللي نسميه 'الفاشل بمرتبة الشرف'.. مو لأن ما عنده إمكانيات، بس لأن روحه ميتة من الخوف من كلمة (قرار)."
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-700 mb-2 border-b border-stone-200 pb-2">محتوى الكلام</h2>
              <p>
                أكو ناس عايشة حياتها على الهامش، ينتظر الظروف هي اللي تقرر بمكانه. تسأله: "وين تريد توصل؟" يكولك "ما أدري، الله كريم". تسأله: "ليش ما تبدأ مشروعك؟" يكولك "بعدني أدرس الوضع". وهو صارله عشر سنين يدرس بالوضع لما الوضع نفسه ملّ منه!
              </p>
              <p>
                الشخص اللي ما يكدر يتخذ قرار، هذا إنسان جاي يظلم نفسه قبل ما يظلم اللي حواليه. عايش بمبدأ (يا صابت يا خابت)، وبالمجمل هي دايمًا (خايبة) لأن اللي ما يختار طريقه، الناس هي اللي راح تختارله الطريق اللي يريحها هي، مو اللي يريحه هو.
              </p>
              <div className="bg-stone-50 p-6 rounded-lg border-r-4 border-amber-500">
                <p className="font-bold text-stone-900 mb-4">يا بطل.. اسمعها مني  بصراحة:</p>
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
                    <span><strong>الحياة ما تحب المترددين:</strong> اللي يخاف من الفشل يضل طول عمره بمكانه، والوكفة بمكانك هي بحد ذاتها أكبر فشل.</span>
                  </li>
                  <li className="flex gap-2">
                    <BookOpen className="text-amber-600 shrink-0 mt-1" />
                    <span><strong>القرار الغلط أحسن من "لا قرار":</strong> على الأقل الغلط يعلمك، بس الـ (صافن) يضيع وقته وعمره وهو يباوع على غيره شلون جاي يعبرون.</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="text-amber-600 shrink-0 mt-1" />
                    <span><strong>لا تضل (ذيل):</strong> خليك صاحب كلمة. السبع هو اللي يضرب الفاس بالراس، لو تطلع ذهب لو تطلع درس للمستقبل.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  أنت مو فاشل لأنك ما نجحت، أنت فاشل لأنك ما تجرأت أصلاً تحاول. باجر من تطلع النتائج وتشوف ربعك وصلوا وأنت بعدك تسأل "أسوي لو ما أسوي"، ذيج الساعة لا تلوم الحظ، لوم إيدك اللي ما امتدت للفرصة وهي كبالك.
                </p>
              </div>
            </section>

            <section className="bg-amber-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-stone-900 mb-2">الخاتمة</h2>
              <p className="font-bold text-stone-950">
                "على الورق.. الحياة ما تنطي جوائز للي يضلون بالاحتياط. انزل للملعب، اتخذ قرار، حتى لو خسرت.. على الأقل خسرت بشرف وأنت جاي تحاول، مو وأنت جاي تتفرج."
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
