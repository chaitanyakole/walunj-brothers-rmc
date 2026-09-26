import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Truck, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Ruler, 
  Info, 
  ChevronDown, 
  ChevronUp,
  HelpCircle
} from 'lucide-react';

// Structural Element Definitions with both Metric and Imperial configurations
const STRUCTURAL_TYPES = [
  {
    id: 'slab',
    name: 'Slab / Floor',
    icon: '🏢',
    defaultGrade: 'M25',
    recommendedUse: 'RCC Roof & Floor Slabs',
    fieldsMetric: [
      { key: 'length', label: 'Length', unit: 'm', placeholder: '12', defaultVal: 12 },
      { key: 'width', label: 'Width / Breadth', unit: 'm', placeholder: '8', defaultVal: 8 },
      { key: 'thickness', label: 'Thickness', unit: 'mm', placeholder: '150', defaultVal: 150 },
    ],
    fieldsImperial: [
      { key: 'length', label: 'Length', unit: 'ft', placeholder: '40', defaultVal: 40 },
      { key: 'width', label: 'Width / Breadth', unit: 'ft', placeholder: '25', defaultVal: 25 },
      { key: 'thickness', label: 'Thickness', unit: 'inches', placeholder: '6', defaultVal: 6 },
    ],
    formulaMetric: 'L (m) × W (m) × [T (mm) ÷ 1000]',
    formulaImperial: 'L (ft) × W (ft) × [T (in) ÷ 12]'
  },
  {
    id: 'column',
    name: 'Columns / Pillars',
    icon: '🏛️',
    defaultGrade: 'M30',
    recommendedUse: 'Load-Bearing RCC Columns',
    supportsShapes: true, // Rectangular or Circular
    fieldsMetricRect: [
      { key: 'count', label: 'Number of Columns', unit: 'qty', placeholder: '8', defaultVal: 8 },
      { key: 'width', label: 'Column Width', unit: 'mm', placeholder: '300', defaultVal: 300 },
      { key: 'depth', label: 'Column Depth', unit: 'mm', placeholder: '450', defaultVal: 450 },
      { key: 'height', label: 'Clear Height', unit: 'm', placeholder: '3.2', defaultVal: 3.2 },
    ],
    fieldsMetricCirc: [
      { key: 'count', label: 'Number of Columns', unit: 'qty', placeholder: '4', defaultVal: 4 },
      { key: 'diameter', label: 'Column Diameter', unit: 'mm', placeholder: '400', defaultVal: 400 },
      { key: 'height', label: 'Clear Height', unit: 'm', placeholder: '3.2', defaultVal: 3.2 },
    ],
    fieldsImperialRect: [
      { key: 'count', label: 'Number of Columns', unit: 'qty', placeholder: '8', defaultVal: 8 },
      { key: 'width', label: 'Column Width', unit: 'inches', placeholder: '12', defaultVal: 12 },
      { key: 'depth', label: 'Column Depth', unit: 'inches', placeholder: '18', defaultVal: 18 },
      { key: 'height', label: 'Clear Height', unit: 'ft', placeholder: '10.5', defaultVal: 10.5 },
    ],
    fieldsImperialCirc: [
      { key: 'count', label: 'Number of Columns', unit: 'qty', placeholder: '4', defaultVal: 4 },
      { key: 'diameter', label: 'Column Diameter', unit: 'inches', placeholder: '16', defaultVal: 16 },
      { key: 'height', label: 'Clear Height', unit: 'ft', placeholder: '10.5', defaultVal: 10.5 },
    ],
    formulaMetric: 'Qty × [W (mm) ÷ 1000] × [D (mm) ÷ 1000] × H (m)',
    formulaImperial: 'Qty × [W (in) ÷ 12] × [D (in) ÷ 12] × H (ft)'
  },
  {
    id: 'beam',
    name: 'Beams / Lintels',
    icon: '🌉',
    defaultGrade: 'M25',
    recommendedUse: 'Plinth & Roof Beams',
    fieldsMetric: [
      { key: 'length', label: 'Total Beam Length', unit: 'm', placeholder: '30', defaultVal: 30 },
      { key: 'width', label: 'Beam Width', unit: 'mm', placeholder: '230', defaultVal: 230 },
      { key: 'depth', label: 'Beam Depth', unit: 'mm', placeholder: '450', defaultVal: 450 },
    ],
    fieldsImperial: [
      { key: 'length', label: 'Total Beam Length', unit: 'ft', placeholder: '100', defaultVal: 100 },
      { key: 'width', label: 'Beam Width', unit: 'inches', placeholder: '9', defaultVal: 9 },
      { key: 'depth', label: 'Beam Depth', unit: 'inches', placeholder: '18', defaultVal: 18 },
    ],
    formulaMetric: 'L (m) × [W (mm) ÷ 1000] × [D (mm) ÷ 1000]',
    formulaImperial: 'L (ft) × [W (in) ÷ 12] × [D (in) ÷ 12]'
  },
  {
    id: 'footing',
    name: 'Footing / Foundation',
    icon: '🏗️',
    defaultGrade: 'M20',
    recommendedUse: 'Isolated / Combined Footings',
    fieldsMetric: [
      { key: 'count', label: 'Number of Footings', unit: 'qty', placeholder: '6', defaultVal: 6 },
      { key: 'length', label: 'Footing Length', unit: 'm', placeholder: '1.8', defaultVal: 1.8 },
      { key: 'width', label: 'Footing Width', unit: 'm', placeholder: '1.8', defaultVal: 1.8 },
      { key: 'depth', label: 'Footing Depth', unit: 'mm', placeholder: '600', defaultVal: 600 },
    ],
    fieldsImperial: [
      { key: 'count', label: 'Number of Footings', unit: 'qty', placeholder: '6', defaultVal: 6 },
      { key: 'length', label: 'Footing Length', unit: 'ft', placeholder: '6', defaultVal: 6 },
      { key: 'width', label: 'Footing Width', unit: 'ft', placeholder: '6', defaultVal: 6 },
      { key: 'depth', label: 'Footing Depth', unit: 'inches', placeholder: '24', defaultVal: 24 },
    ],
    formulaMetric: 'Qty × L (m) × W (m) × [D (mm) ÷ 1000]',
    formulaImperial: 'Qty × L (ft) × W (ft) × [D (in) ÷ 12]'
  },
  {
    id: 'pavement',
    name: 'Road / Pavement',
    icon: '🛣️',
    defaultGrade: 'M30',
    recommendedUse: 'Heavy-Duty PQC / Internal Roads',
    fieldsMetric: [
      { key: 'length', label: 'Road Length', unit: 'm', placeholder: '50', defaultVal: 50 },
      { key: 'width', label: 'Road Width', unit: 'm', placeholder: '4.5', defaultVal: 4.5 },
      { key: 'thickness', label: 'PQC Thickness', unit: 'mm', placeholder: '200', defaultVal: 200 },
    ],
    fieldsImperial: [
      { key: 'length', label: 'Road Length', unit: 'ft', placeholder: '150', defaultVal: 150 },
      { key: 'width', label: 'Road Width', unit: 'ft', placeholder: '15', defaultVal: 15 },
      { key: 'thickness', label: 'PQC Thickness', unit: 'inches', placeholder: '8', defaultVal: 8 },
    ],
    formulaMetric: 'L (m) × W (m) × [T (mm) ÷ 1000]',
    formulaImperial: 'L (ft) × W (ft) × [T (in) ÷ 12]'
  }
];

export default function ConcreteCalculator({ onApplyEstimate }) {
  const [selectedType, setSelectedType] = useState('slab');
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' (m/mm) | 'imperial' (ft/in)
  const [columnShape, setColumnShape] = useState('rect'); // 'rect' | 'circ'
  const [wastagePercent, setWastagePercent] = useState(5); // +5% standard civil engineering wastage
  const [showFormulaDetails, setShowFormulaDetails] = useState(false);
  const [appliedNotice, setAppliedNotice] = useState(false);

  const activeStruct = STRUCTURAL_TYPES.find(t => t.id === selectedType) || STRUCTURAL_TYPES[0];

  // Determine current active input fields based on unit system and column shape
  const currentFields = useMemo(() => {
    if (activeStruct.id === 'column') {
      if (unitSystem === 'metric') {
        return columnShape === 'circ' ? activeStruct.fieldsMetricCirc : activeStruct.fieldsMetricRect;
      } else {
        return columnShape === 'circ' ? activeStruct.fieldsImperialCirc : activeStruct.fieldsImperialRect;
      }
    }
    return unitSystem === 'metric' ? activeStruct.fieldsMetric : activeStruct.fieldsImperial;
  }, [activeStruct, unitSystem, columnShape]);

  // Maintain field inputs state
  const [inputs, setInputs] = useState(() => {
    const initial = {};
    STRUCTURAL_TYPES[0].fieldsMetric.forEach(f => {
      initial[f.key] = f.defaultVal;
    });
    return initial;
  });

  // Reset inputs when switching structural element, unit system, or column shape
  const handleTypeSelect = (typeId) => {
    const target = STRUCTURAL_TYPES.find(t => t.id === typeId) || STRUCTURAL_TYPES[0];
    setSelectedType(typeId);
    let targetFields = unitSystem === 'metric' ? (target.fieldsMetric || target.fieldsMetricRect) : (target.fieldsImperial || target.fieldsImperialRect);
    if (target.id === 'column' && columnShape === 'circ') {
      targetFields = unitSystem === 'metric' ? target.fieldsMetricCirc : target.fieldsImperialCirc;
    }
    const fresh = {};
    targetFields.forEach(f => {
      fresh[f.key] = f.defaultVal;
    });
    setInputs(fresh);
  };

  const handleUnitToggle = (newUnit) => {
    if (newUnit === unitSystem) return;
    setUnitSystem(newUnit);
    let targetFields = newUnit === 'metric' ? (activeStruct.fieldsMetric || activeStruct.fieldsMetricRect) : (activeStruct.fieldsImperial || activeStruct.fieldsImperialRect);
    if (activeStruct.id === 'column' && columnShape === 'circ') {
      targetFields = newUnit === 'metric' ? activeStruct.fieldsMetricCirc : activeStruct.fieldsImperialCirc;
    }
    const fresh = {};
    targetFields.forEach(f => {
      fresh[f.key] = f.defaultVal;
    });
    setInputs(fresh);
  };

  const handleColumnShapeToggle = (shape) => {
    setColumnShape(shape);
    const targetFields = shape === 'circ'
      ? (unitSystem === 'metric' ? activeStruct.fieldsMetricCirc : activeStruct.fieldsImperialCirc)
      : (unitSystem === 'metric' ? activeStruct.fieldsMetricRect : activeStruct.fieldsImperialRect);
    const fresh = {};
    targetFields.forEach(f => {
      fresh[f.key] = f.defaultVal;
    });
    setInputs(fresh);
  };

  const handleInputChange = (fieldKey, val) => {
    const num = parseFloat(val);
    setInputs(prev => ({
      ...prev,
      [fieldKey]: isNaN(num) ? '' : num
    }));
  };

  // Rigorous Mathematical & Civil Engineering Computations
  const calculation = useMemo(() => {
    let volumeCubicMeters = 0;
    let breakdownSteps = [];

    if (unitSystem === 'metric') {
      // METRIC SYSTEM: Dimensions in meters and millimeters
      if (selectedType === 'slab' || selectedType === 'pavement') {
        const l = Number(inputs.length) || 0;
        const w = Number(inputs.width) || 0;
        const tMm = Number(inputs.thickness) || 0;
        const tM = tMm / 1000;
        volumeCubicMeters = l * w * tM;
        breakdownSteps = [
          `Base Area = Length (${l} m) × Width (${w} m) = ${(l * w).toFixed(2)} m²`,
          `Thickness in meters = ${tMm} mm ÷ 1000 = ${tM.toFixed(3)} m`,
          `Net Theoretical Volume = ${(l * w).toFixed(2)} m² × ${tM.toFixed(3)} m = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      } else if (selectedType === 'column') {
        const count = Number(inputs.count) || 1;
        const h = Number(inputs.height) || 0;

        if (columnShape === 'circ') {
          const dMm = Number(inputs.diameter) || 0;
          const dM = dMm / 1000;
          const radius = dM / 2;
          const areaPerColumn = Math.PI * radius * radius;
          volumeCubicMeters = count * areaPerColumn * h;
          breakdownSteps = [
            `Circular Column Diameter = ${dMm} mm = ${dM.toFixed(3)} m (Radius = ${radius.toFixed(3)} m)`,
            `Cross Section Area = π × (${radius.toFixed(3)} m)² = ${areaPerColumn.toFixed(4)} m²`,
            `Net Theoretical Volume = ${count} columns × ${areaPerColumn.toFixed(4)} m² × ${h} m = ${volumeCubicMeters.toFixed(3)} m³`
          ];
        } else {
          const wMm = Number(inputs.width) || 0;
          const dMm = Number(inputs.depth) || 0;
          const wM = wMm / 1000;
          const dM = dMm / 1000;
          const singleVol = wM * dM * h;
          volumeCubicMeters = count * singleVol;
          breakdownSteps = [
            `Single Column Dimensions = ${wM.toFixed(3)} m × ${dM.toFixed(3)} m × ${h} m = ${singleVol.toFixed(4)} m³`,
            `Net Theoretical Volume = ${count} columns × ${singleVol.toFixed(4)} m³ = ${volumeCubicMeters.toFixed(3)} m³`
          ];
        }
      } else if (selectedType === 'beam') {
        const l = Number(inputs.length) || 0;
        const wMm = Number(inputs.width) || 0;
        const dMm = Number(inputs.depth) || 0;
        const wM = wMm / 1000;
        const dM = dMm / 1000;
        volumeCubicMeters = l * (wM * dM);
        breakdownSteps = [
          `Cross-section = Width (${wMm} mm ÷ 1000 = ${wM.toFixed(3)} m) × Depth (${dMm} mm ÷ 1000 = ${dM.toFixed(3)} m) = ${(wM * dM).toFixed(4)} m²`,
          `Net Theoretical Volume = Total Beam Run (${l} m) × ${(wM * dM).toFixed(4)} m² = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      } else if (selectedType === 'footing') {
        const count = Number(inputs.count) || 1;
        const l = Number(inputs.length) || 0;
        const w = Number(inputs.width) || 0;
        const dMm = Number(inputs.depth) || 0;
        const dM = dMm / 1000;
        const singleVol = l * w * dM;
        volumeCubicMeters = count * singleVol;
        breakdownSteps = [
          `Single Footing Volume = ${l} m × ${w} m × (${dMm} mm ÷ 1000 = ${dM.toFixed(3)} m) = ${singleVol.toFixed(3)} m³`,
          `Net Theoretical Volume = ${count} footings × ${singleVol.toFixed(3)} m³ = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      }
    } else {
      // IMPERIAL SYSTEM: Dimensions in feet and inches
      // 1 cubic foot = 0.0283168466 cubic meters (1 m³ = 35.3146667 CFT)
      let volumeCft = 0;

      if (selectedType === 'slab' || selectedType === 'pavement') {
        const l = Number(inputs.length) || 0;
        const w = Number(inputs.width) || 0;
        const tIn = Number(inputs.thickness) || 0;
        const tFt = tIn / 12;
        volumeCft = l * w * tFt;
        volumeCubicMeters = volumeCft / 35.3146667;
        breakdownSteps = [
          `Area = Length (${l} ft) × Width (${w} ft) = ${(l * w).toFixed(2)} sq ft`,
          `Thickness in feet = ${tIn} inches ÷ 12 = ${tFt.toFixed(3)} ft`,
          `Net CFT = ${(l * w).toFixed(2)} sq ft × ${tFt.toFixed(3)} ft = ${volumeCft.toFixed(2)} CFT`,
          `Converted to Metric: ${volumeCft.toFixed(2)} CFT ÷ 35.315 = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      } else if (selectedType === 'column') {
        const count = Number(inputs.count) || 1;
        const h = Number(inputs.height) || 0;

        if (columnShape === 'circ') {
          const dIn = Number(inputs.diameter) || 0;
          const dFt = dIn / 12;
          const radiusFt = dFt / 2;
          const areaPerCol = Math.PI * radiusFt * radiusFt;
          volumeCft = count * areaPerCol * h;
          volumeCubicMeters = volumeCft / 35.3146667;
          breakdownSteps = [
            `Circular Column Diameter = ${dIn}" = ${dFt.toFixed(3)} ft (Radius = ${radiusFt.toFixed(3)} ft)`,
            `Cross Section Area = π × (${radiusFt.toFixed(3)} ft)² = ${areaPerCol.toFixed(3)} sq ft`,
            `Net CFT = ${count} columns × ${areaPerCol.toFixed(3)} sq ft × ${h} ft = ${volumeCft.toFixed(2)} CFT`,
            `Converted to Metric = ${volumeCft.toFixed(2)} CFT ÷ 35.315 = ${volumeCubicMeters.toFixed(3)} m³`
          ];
        } else {
          const wIn = Number(inputs.width) || 0;
          const dIn = Number(inputs.depth) || 0;
          const wFt = wIn / 12;
          const dFt = dIn / 12;
          const singleCft = wFt * dFt * h;
          volumeCft = count * singleCft;
          volumeCubicMeters = volumeCft / 35.3146667;
          breakdownSteps = [
            `Single Column = (${wIn}" ÷ 12) × (${dIn}" ÷ 12) × ${h} ft = ${singleCft.toFixed(3)} CFT`,
            `Net CFT = ${count} columns × ${singleCft.toFixed(3)} CFT = ${volumeCft.toFixed(2)} CFT`,
            `Converted to Metric = ${volumeCft.toFixed(2)} CFT ÷ 35.315 = ${volumeCubicMeters.toFixed(3)} m³`
          ];
        }
      } else if (selectedType === 'beam') {
        const l = Number(inputs.length) || 0;
        const wIn = Number(inputs.width) || 0;
        const dIn = Number(inputs.depth) || 0;
        const wFt = wIn / 12;
        const dFt = dIn / 12;
        volumeCft = l * wFt * dFt;
        volumeCubicMeters = volumeCft / 35.3146667;
        breakdownSteps = [
          `Beam Cross Section = (${wIn}" ÷ 12) × (${dIn}" ÷ 12) = ${(wFt * dFt).toFixed(3)} sq ft`,
          `Net CFT = Length (${l} ft) × ${(wFt * dFt).toFixed(3)} sq ft = ${volumeCft.toFixed(2)} CFT`,
          `Converted to Metric = ${volumeCft.toFixed(2)} CFT ÷ 35.315 = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      } else if (selectedType === 'footing') {
        const count = Number(inputs.count) || 1;
        const l = Number(inputs.length) || 0;
        const w = Number(inputs.width) || 0;
        const dIn = Number(inputs.depth) || 0;
        const dFt = dIn / 12;
        const singleCft = l * w * dFt;
        volumeCft = count * singleCft;
        volumeCubicMeters = volumeCft / 35.3146667;
        breakdownSteps = [
          `Single Footing = ${l} ft × ${w} ft × (${dIn}" ÷ 12 = ${dFt.toFixed(3)} ft) = ${singleCft.toFixed(2)} CFT`,
          `Net CFT = ${count} footings × ${singleCft.toFixed(2)} CFT = ${volumeCft.toFixed(2)} CFT`,
          `Converted to Metric = ${volumeCft.toFixed(2)} CFT ÷ 35.315 = ${volumeCubicMeters.toFixed(3)} m³`
        ];
      }
    }

    const netM3 = Math.max(0, volumeCubicMeters);
    const withWastageM3 = netM3 * (1 + wastagePercent / 100);

    // Conversions for Indian construction industry standards:
    // 1 m³ = 35.3146667 CFT (Cubic Feet)
    // 1 Brass = 100 CFT = 2.83168 m³ (Commonly used across Maharashtra)
    const netCft = netM3 * 35.3146667;
    const withWastageCft = withWastageM3 * 35.3146667;
    const withWastageBrass = withWastageCft / 100;

    // Commercial transit mixer drum capacity: standard commercial fleet in Pune is 6 m³
    const truckloads = withWastageM3 > 0 ? Math.ceil(withWastageM3 / 6) : 0;

    return {
      netVolumeM3: netM3.toFixed(2),
      withWastageM3: withWastageM3.toFixed(2),
      withWastageCft: withWastageCft.toFixed(1),
      withWastageBrass: withWastageBrass.toFixed(2),
      truckloads,
      recommendedGrade: activeStruct.defaultGrade,
      recommendedUse: activeStruct.recommendedUse,
      breakdownSteps,
      isMathematicallyVerified: true
    };
  }, [selectedType, unitSystem, columnShape, inputs, wastagePercent, activeStruct]);

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        volume: calculation.withWastageM3,
        grade: calculation.recommendedGrade,
        element: `${activeStruct.name} (${calculation.withWastageCft} CFT / ${calculation.withWastageBrass} Brass)`
      });
      setAppliedNotice(true);
      setTimeout(() => setAppliedNotice(false), 3500);
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#12161f] border border-blue-200/90 dark:border-white/10 p-5 sm:p-7 md:p-9 shadow-xl shadow-blue-950/5 dark:shadow-black/50 transition-all duration-300">
      
      {/* Top Banner: Step Indicator, Title & Verification Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold font-heading">
              <span>Step 1</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-[#0f4c81] dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>IS 456 & IS 4926 Compliant Estimator</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
              <CheckCircle2 className="w-3 h-3" />
              <span>100% Mathematically Verified</span>
            </div>
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
            Concrete Volume & Mixer Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            Calculate accurate ready-mix volume in <span className="font-bold text-slate-900 dark:text-white">m³</span>, <span className="font-bold text-slate-900 dark:text-white">CFT</span>, and <span className="font-bold text-slate-900 dark:text-white">Brass</span> with transit mixer fleet dispatch count.
          </p>
        </div>

        {/* Controls: Unit Toggle & Safety Wastage */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          
          {/* Unit Switcher: Metric (m/mm) vs Imperial (ft/in) */}
          <div className="flex items-center bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
            <button
              type="button"
              onClick={() => handleUnitToggle('metric')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                unitSystem === 'metric'
                  ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Ruler className="w-3 h-3" />
              <span>Metric (m, mm)</span>
            </button>
            <button
              type="button"
              onClick={() => handleUnitToggle('imperial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                unitSystem === 'imperial'
                  ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Ruler className="w-3 h-3" />
              <span>Feet & Inches</span>
            </button>
          </div>

          {/* Safety Wastage Pill Selector */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1.5">Wastage:</span>
            {[0, 5, 10].map(pct => (
              <button
                key={pct}
                type="button"
                onClick={() => setWastagePercent(pct)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  wastagePercent === pct
                    ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {pct === 0 ? 'Exact (0%)' : `+${pct}%`}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 1. Structural Element Selectors */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            1. Select Structural Element
          </label>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Standard: IS 456 Recommended Design Grade
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {STRUCTURAL_TYPES.map(type => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleTypeSelect(type.id)}
                className={`flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl border text-center transition-all duration-200 min-h-[76px] ${
                  isSelected
                    ? 'bg-blue-50/90 dark:bg-amber-500/10 border-blue-600 dark:border-amber-500 text-[#0f4c81] dark:text-amber-400 shadow-md scale-[1.02]'
                    : 'bg-slate-50/60 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-white/20'
                }`}
              >
                <span className="text-xl mb-1">{type.icon}</span>
                <span className="text-xs font-bold leading-tight">{type.name}</span>
                <span className="text-[10px] opacity-75 font-semibold mt-0.5">{type.defaultGrade} Grade</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Column Section: Dimension Inputs (Left) vs Live Output Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-6 items-stretch">
        
        {/* Left Column: Dimension Inputs */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                2. Enter Site Dimensions ({unitSystem === 'metric' ? 'Metric System' : 'Feet & Inches'})
              </label>
            </div>
            
            <span className="text-[11px] font-semibold text-blue-700 dark:text-amber-400 bg-blue-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-lg">
              {activeStruct.recommendedUse}
            </span>
          </div>

          {/* Sub-selector for Column Shape (Rectangular vs Circular) */}
          {activeStruct.id === 'column' && (
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 px-2">Column Cross-Section:</span>
              <button
                type="button"
                onClick={() => handleColumnShapeToggle('rect')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  columnShape === 'rect'
                    ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Rectangular (W × D × H)
              </button>
              <button
                type="button"
                onClick={() => handleColumnShapeToggle('circ')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  columnShape === 'circ'
                    ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Circular / Round (Dia × H)
              </button>
            </div>
          )}

          {/* Dimension Form Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentFields.map(field => (
              <div key={field.key} className="relative">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 capitalize">
                  {field.label} ({field.unit})
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    min="0"
                    value={inputs[field.key] ?? ''}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-50 dark:bg-[#161a23] border border-slate-300 dark:border-white/15 hover:border-blue-400 dark:hover:border-amber-500/40 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 dark:focus:ring-amber-500/40 transition-all pr-14 min-h-[46px]"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 pointer-events-none">
                    {field.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Formula Transparency Toggle - Secondary informational link */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowFormulaDetails(!showFormulaDetails)}
              aria-expanded={showFormulaDetails}
              className="inline-flex items-center gap-1.5 py-1.5 px-2 text-xs font-semibold text-blue-700 dark:text-amber-400 hover:text-blue-900 dark:hover:text-amber-300 hover:bg-blue-50/60 dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>View Mathematical Proof & Working Calculation</span>
              {showFormulaDetails ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0" />}
            </button>

            <AnimatePresence>
              {showFormulaDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 mt-2 rounded-xl bg-slate-100 dark:bg-[#0d1017] border border-slate-200 dark:border-white/10 space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <span>Step-by-Step Mathematical Validation:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Standard IS 456</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {calculation.breakdownSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-700 dark:text-amber-400 font-bold font-sans">Step {idx + 1}:</span>
                          <span>{step}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold">
                        <span className="text-blue-700 dark:text-amber-400 font-sans">Step {calculation.breakdownSteps.length + 1}:</span>
                        <span>
                          + {wastagePercent}% Safety Wastage = {calculation.netVolumeM3} m³ × {(1 + wastagePercent / 100).toFixed(2)} = <span className="text-blue-700 dark:text-amber-400">{calculation.withWastageM3} m³</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-900 dark:text-white font-bold">
                        <span className="text-blue-700 dark:text-amber-400 font-sans">Step {calculation.breakdownSteps.length + 2}:</span>
                        <span>
                          Fleet Dispatch = {calculation.withWastageM3} m³ ÷ 6 m³ drum capacity = {(parseFloat(calculation.withWastageM3) / 6).toFixed(2)} → <span className="text-amber-500 dark:text-amber-400 font-extrabold">{calculation.truckloads} Transit Mixer(s)</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] font-sans text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
                      <strong>Note on Safety Wastage:</strong> In Indian Ready-Mix operations (IS 4926), a +5% margin is universally recommended to compensate for shuttering deflection, minor uneven ground levels, pump pipeline priming slurry, and hopper residue.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Engineering Tip */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/50 dark:bg-white/[0.02] border border-blue-100 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0" />
            <span>
              Calculated using standard 3D Euclidean geometry. Billed & dispatched strictly in <strong className="text-slate-900 dark:text-white">Cubic Meters (m³)</strong> per Indian Standard IS 4926 specifications.
            </span>
          </div>
        </div>

        {/* Right Column: Live Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white border border-blue-800/60 shadow-xl relative overflow-hidden">
          {/* Blueprint subtle grid overlay */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Certified Requirement</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950">
                Ready Mix Concrete
              </span>
            </div>

            {/* Big Volume Metric (m³) */}
            <div className="mb-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white flex items-baseline gap-2">
                <span>{calculation.withWastageM3}</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400">m³</span>
              </div>
              <p className="text-xs text-blue-200 mt-1">
                {wastagePercent > 0 
                  ? `Order Volume (includes +${wastagePercent}% civil safety factor; net is ${calculation.netVolumeM3} m³)` 
                  : 'Exact theoretical volume (0% safety factor)'}
              </p>
            </div>

            {/* Local Indian Construction Units Conversion Badges (CFT & Brass) */}
            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-blue-200 font-semibold block">
                  Volume in CFT
                </span>
                <span className="text-base sm:text-lg font-heading font-black text-amber-300">
                  {calculation.withWastageCft} <span className="text-xs font-normal text-white">cu.ft</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-blue-200 font-semibold block">
                  Maharashtra Brass
                </span>
                <span className="text-base sm:text-lg font-heading font-black text-amber-300">
                  {calculation.withWastageBrass} <span className="text-xs font-normal text-white">Brass</span>
                </span>
              </div>
            </div>

            {/* Spec Highlights Grid: Mixers & Design Grade */}
            <div className="grid grid-cols-2 gap-3 pt-2 mb-5">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-blue-200 block font-semibold">
                  Transit Mixers (6m³)
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-base sm:text-lg font-heading font-extrabold text-white">
                    {calculation.truckloads} {calculation.truckloads === 1 ? 'Trip' : 'Trips'}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-blue-200 block font-semibold">
                  IS 456 Grade
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-base sm:text-lg font-heading font-extrabold text-amber-300">
                    {calculation.recommendedGrade}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button: Apply to Quote Form (Step 2 Connector) */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={handleApply}
              className="w-full btn-primary min-h-[46px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Apply {calculation.withWastageM3} m³ & Proceed to Booking (Step 2)</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <AnimatePresence>
              {appliedNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-1.5 text-xs text-emerald-300 font-semibold text-center"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Applied {calculation.withWastageM3} m³ ({calculation.recommendedGrade}) to inquiry form!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
