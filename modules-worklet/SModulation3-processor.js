
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSModulation3() {
	return "{\"name\":\"Modulation 3\",\"filename\":\"SModulation3\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"262380\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SModulation3\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Modulation 3\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"NLFMs\",\"items\":[{\"type\":\"hslider\",\"label\":\"Modulation Type 3\",\"address\":\"/NLFMs/Modulation_Type_3\",\"index\":\"262204\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/NLFMs/Frequency\",\"index\":\"262184\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 15\"},{\"unit\":\"Hz\"}],\"init\":\"330\",\"min\":\"100\",\"max\":\"1200\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Volume\",\"address\":\"/NLFMs/Volume\",\"index\":\"262360\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Modulating Frequency\",\"address\":\"/NLFMs/Modulating_Frequency\",\"index\":\"262260\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"1200\",\"min\":\"900\",\"max\":\"1700\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSModulation3() { return "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dGlvbjMifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNb2R1bGF0aW9uIDMifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJOTEZNcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiBUeXBlIDMiLCJhZGRyZXNzIjoiL05MRk1zL01vZHVsYXRpb25fVHlwZV8zIiwiaW5kZXgiOiIyNjIyMDQiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvTkxGTXMvRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjIxODQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTUifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMzMCIsIm1pbiI6IjEwMCIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIiwiYWRkcmVzcyI6Ii9OTEZNcy9Wb2x1bWUiLCJpbmRleCI6IjI2MjM2MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpbmcgRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9OTEZNcy9Nb2R1bGF0aW5nX0ZyZXF1ZW5jeSIsImluZGV4IjoiMjYyMjYwIiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjEyMDAiLCJtaW4iOiI5MDAiLCJtYXgiOiIxNzAwIiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SModulation3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SModulation3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SModulation3Processor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SModulation3Processor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SModulation3Processor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= SModulation3Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SModulation3Processor.parse_ui(JSON.parse(getJSONSModulation3()).ui, params, SModulation3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSModulation3());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.SModulation3_instance = new WebAssembly.Instance(SModulation3Processor.wasm_module, SModulation3Processor.importObject);
  	   	this.factory = this.SModulation3_instance.exports;
        this.HEAP = this.SModulation3_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SModulation3Processor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SModulation3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SModulation3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SModulation3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SModulation3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SModulation3Processor.parse_ui(this.json_object.ui, this, SModulation3Processor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SModulation3Processor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0][0] === undefined))) {
            console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0][0] === undefined))) {
            console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, SModulation3Processor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SModulation3Processor.buffer_size = 128;

SModulation3Processor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (SModulation3Processor.wasm_module == undefined) {
        SModulation3Processor.wasm_module = new WebAssembly.Module(SModulation3Processor.atob(getBase64CodeSModulation3()));
        registerProcessor('SModulation3', SModulation3Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SModulation3 cannot be loaded or compiled");
}

