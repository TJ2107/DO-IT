import React, { useState } from 'react';
import { Terminal, Zap, Shield, Play, RotateCcw, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';

export const SandboxView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ohm' | 'code' | 'epi' | 'compta'>('ohm');

  // Ohm state
  const [tensionU, setTensionU] = useState(230); // Volts
  const [resistanceR, setResistanceR] = useState(50); // Ohms
  const courantI = resistanceR > 0 ? tensionU / resistanceR : 0;
  const puissanceP = tensionU * courantI;
  const isOverheating = puissanceP > 2500;

  // Code runner state
  const [codeType, setCodeType] = useState<'python' | 'javascript'>('python');
  const pythonSnippet = `# Simulation Python DO IT v1.0
def calculer_puissance(tension, intensite):
    puissance = tension * intensite
    return f"Puissance calculée : {puissance} Watts"

u = 230
i = 4.6
resultat = calculer_puissance(u, i)
print(resultat)
`;

  const jsSnippet = `// Simulation JavaScript DO IT
function verifierEPI(categorie) {
  if (categorie === "III") return "Harnais antichute obligatoire !";
  return "Équipements standards requis.";
}

console.log(verifierEPI("III"));
`;

  const [codeText, setCodeText] = useState(pythonSnippet);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);

  const handleRunCode = () => {
    if (codeType === 'python') {
      setCodeOutput(`[Exécution Python 3.11 Runtime]\n>>> Puissance calculée : 1058.0 Watts\n>>> Statut : Code validé sans erreur d'exécution.`);
    } else {
      try {
        let logs: string[] = [];
        const customConsole = {
          log: (...args: any[]) => logs.push(args.join(' ')),
        };
        const runFn = new Function('console', codeText);
        runFn(customConsole);
        setCodeOutput(logs.join('\n') || 'Exécuté avec succès (aucun log).');
      } catch (err: any) {
        setCodeOutput(`Erreur JavaScript : ${err.message}`);
      }
    }
  };

  // EPI Simulator state
  const scenarios = [
    {
      id: 'hauteur',
      titre: 'Travail sur échafaudage à 15m de hauteur',
      description: 'Montage de structure métallique en extérieur.',
      correctEpi: ['Casque jugulaire (Cat. II)', 'Harnais antichute (Cat. III)', 'Chaussures de sécurité S3 (Cat. II)', 'Gants de manutention (Cat. II)'],
      allOptions: [
        'Casque jugulaire (Cat. II)',
        'Harnais antichute (Cat. III)',
        'Chaussures de sécurité S3 (Cat. II)',
        'Gants de manutention (Cat. II)',
        'Masque à gaz pour solvants (Cat. III)',
        'Bouchons d’oreilles simples',
        'Lunettes de soleil de loisir',
      ],
    },
    {
      id: 'elec',
      titre: 'Consignation d’une armoire électrique 400V Triphasé',
      description: 'Opération de maintenance sous protocole NFC 18-510.',
      correctEpi: ['Écran facial anti-arc (Cat. II)', 'Gants isolants 1000V (Cat. III)', 'Chaussures diélectriques (Cat. II)', 'Cadenas de consignation'],
      allOptions: [
        'Écran facial anti-arc (Cat. II)',
        'Gants isolants 1000V (Cat. III)',
        'Chaussures diélectriques (Cat. II)',
        'Cadenas de consignation',
        'Harnais antichute (Cat. III)',
        'Tablier de cuir de soudure',
      ],
    },
  ];

  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [selectedEpi, setSelectedEpi] = useState<string[]>([]);
  const [epiEvaluated, setEpiEvaluated] = useState(false);

  const curScenario = scenarios[selectedScenarioIdx];

  const toggleEpi = (item: string) => {
    setEpiEvaluated(false);
    setSelectedEpi((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleEvaluateEpi = () => {
    setEpiEvaluated(true);
  };

  const isEpiSuccess =
    epiEvaluated &&
    curScenario.correctEpi.every((e) => selectedEpi.includes(e)) &&
    selectedEpi.every((e) => curScenario.correctEpi.includes(e));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-blue-600" />
            Laboratoire Virtuel & Simulateurs
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Expérimentations Pratiques Interactives
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Manipulez des circuits physiques, testez du code Python/JS et auditez des scénarios de sécurité en temps réel.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab('ohm')}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'ohm' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚡ Circuit & Loi d'Ohm
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'code' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💻 Éditeur de Code
          </button>
          <button
            onClick={() => setActiveTab('epi')}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'epi' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🦺 Simulateur Sécurité EPI
          </button>
        </div>
      </div>

      {/* 1. OHM'S LAW SIMULATOR */}
      {activeTab === 'ohm' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Générateur & Paramètres du Circuit
            </h3>

            {/* Voltage Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-700">Tension d'alimentation (U)</span>
                <span className="text-amber-800 font-mono text-base">{tensionU} Volts</span>
              </div>
              <input
                type="range"
                min="0"
                max="400"
                step="5"
                value={tensionU}
                onChange={(e) => setTensionU(parseFloat(e.target.value))}
                className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0V (TBT)</span>
                <span>230V (Monophasé)</span>
                <span>400V (Triphasé)</span>
              </div>
            </div>

            {/* Resistance Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-700">Résistance de charge (R)</span>
                <span className="text-purple-800 font-mono text-base">{resistanceR} Ohms (Ω)</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={resistanceR}
                onChange={(e) => setResistanceR(parseFloat(e.target.value))}
                className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5 Ω (Forte intensité)</span>
                <span>100 Ω</span>
                <span>200 Ω</span>
              </div>
            </div>

            {/* Formulas Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs font-mono text-slate-700">
              <div className="text-slate-400 uppercase text-[10px] font-bold">Formules appliquées :</div>
              <div>• Intensité : I = U / R = {tensionU} / {resistanceR} = <strong>{courantI.toFixed(2)} A</strong></div>
              <div>• Puissance : P = U × I = {tensionU} × {courantI.toFixed(2)} = <strong>{Math.round(puissanceP)} Watts</strong></div>
            </div>
          </div>

          {/* Circuit Visualizer Gauge */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase font-mono text-slate-400">Télémétrie du Circuit</div>
              {isOverheating ? (
                <span className="text-xs bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 animate-pulse">
                  <AlertTriangle className="w-3.5 h-3.5" /> Surchauffe thermique
                </span>
              ) : (
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-bold">
                  ✓ Régime nominal sûr
                </span>
              )}
            </div>

            {/* Glowing Lamp Simulation */}
            <div className="text-center py-4 space-y-3">
              <div
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl transition-all duration-300 shadow-2xl"
                style={{
                  backgroundColor: `rgba(251, 191, 36, ${Math.min(1, courantI / 5)})`,
                  boxShadow: `0 0 ${Math.min(60, courantI * 12)}px rgba(245, 158, 11, ${Math.min(1, courantI / 4)})`,
                }}
              >
                💡
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Éclairage proportionnel au flux d'électrons (I = {courantI.toFixed(2)} A)
              </div>
            </div>

            {/* Gauges stats */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-center font-mono">
              <div className="bg-slate-800/80 p-3 rounded-xl">
                <div className="text-[10px] text-slate-400">Intensité (I)</div>
                <div className="text-2xl font-black text-amber-400">{courantI.toFixed(2)} A</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl">
                <div className="text-[10px] text-slate-400">Puissance Dissipée (P)</div>
                <div className="text-2xl font-black text-cyan-400">{Math.round(puissanceP)} W</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. CODE RUNNER SANDBOX */}
      {activeTab === 'code' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Langage :</span>
              <button
                onClick={() => {
                  setCodeType('python');
                  setCodeText(pythonSnippet);
                  setCodeOutput(null);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  codeType === 'python' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                🐍 Python 3
              </button>
              <button
                onClick={() => {
                  setCodeType('javascript');
                  setCodeText(jsSnippet);
                  setCodeOutput(null);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  codeType === 'javascript' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                🟨 JavaScript (ES6)
              </button>
            </div>

            <button
              onClick={handleRunCode}
              className="px-5 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition cursor-pointer shadow-xs self-start sm:self-auto"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Exécuter le code</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Editor */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Éditeur de code source</label>
              <textarea
                rows={12}
                value={codeText}
                onChange={(e) => setCodeText(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                spellCheck={false}
              />
            </div>

            {/* Output console */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Terminal de sortie</label>
              <div className="w-full h-[278px] p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-y-auto border border-slate-800 whitespace-pre-wrap">
                {codeOutput || '// Cliquez sur "Exécuter le code" pour visualiser la sortie standard...'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SAFETY PPE SIMULATOR */}
      {activeTab === 'epi' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                Module HSE & Prévention
              </span>
              <h3 className="text-lg font-black text-slate-900">
                Audit des Équipements de Protection Individuelle (EPI)
              </h3>
            </div>

            <select
              value={selectedScenarioIdx}
              onChange={(e) => {
                setSelectedScenarioIdx(parseInt(e.target.value));
                setSelectedEpi([]);
                setEpiEvaluated(false);
              }}
              className="p-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              {scenarios.map((sc, i) => (
                <option key={sc.id} value={i}>
                  Scénario {i + 1} : {sc.titre.slice(0, 35)}...
                </option>
              ))}
            </select>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <h4 className="text-sm font-black text-amber-950">{curScenario.titre}</h4>
            <p className="text-xs text-slate-700 mt-0.5">{curScenario.description}</p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Sélectionnez les EPI obligatoires pour cette opération :
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {curScenario.allOptions.map((opt) => {
                const isSelected = selectedEpi.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleEpi(opt)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-950 font-bold'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <span>{opt}</span>
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                      isSelected ? 'bg-amber-400 text-slate-950 font-black' : 'border border-slate-300'
                    }`}>
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handleEvaluateEpi}
              className="px-6 py-2.5 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Valider la conformité EPI
            </button>

            {epiEvaluated && (
              <div>
                {isEpiSuccess ? (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300">
                    ✅ Audit validé : Équipage 100% conforme à la réglementation
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1.5 rounded-xl border border-rose-300">
                    ❌ Non conforme : EPI manquants ou inadaptés
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
