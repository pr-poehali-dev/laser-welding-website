import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 leading-tight text-[#ffffff]">
              Лазерная обработка{" "}
              <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                металла
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Высокоточная резка профильных труб, сварка черных металлов и
              порошковая покраска по RAL каталогу
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors bg-gray-600">
                Рассчитать стоимость
              </button>
              <button className="border-2 border-gray-400 hover:border-gray-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Наши работы
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-300 mb-2">4мм</div>
                <div className="text-sm text-gray-400">макс. толщина резки</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-300 mb-2">5+</div>
                <div className="text-sm text-gray-400">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-300 mb-2">RAL</div>
                <div className="text-sm text-gray-400">каталог покраски</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl text-center bg-transparent">
                  <Icon
                    name="Scissors"
                    className="h-12 w-12 text-gray-300 mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">Лазерная резка</h3>
                  <p className="text-sm text-gray-400">
                    Профильные трубы до 4мм
                  </p>
                </div>
                <div className="p-6 rounded-xl text-center bg-transparent">
                  <Icon
                    name="Flame"
                    className="h-12 w-12 text-gray-300 mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">Лазерная сварка</h3>
                  <p className="text-sm text-gray-400">Черные металлы</p>
                </div>
                <div className="p-6 rounded-xl text-center col-span-2 bg-transparent">
                  <Icon
                    name="Palette"
                    className="h-12 w-12 text-gray-300 mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">Порошковая покраска</h3>
                  <p className="text-sm text-gray-400">По каталогу RAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
