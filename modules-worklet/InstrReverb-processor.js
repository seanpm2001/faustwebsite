
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"filename\":\"InstrReverb\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"InstrReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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IExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ikluc3RyUmV2ZXJiIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemUiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWUiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class InstrReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            InstrReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            InstrReverbProcessor.parse_items(group.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= InstrReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        InstrReverbProcessor.parse_ui(JSON.parse(getJSONInstrReverb()).ui, params, InstrReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONInstrReverb());

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
        
        this.InstrReverb_instance = new WebAssembly.Instance(InstrReverbProcessor.wasm_module, InstrReverbProcessor.importObject);
  	   	this.factory = this.InstrReverb_instance.exports;
        this.HEAP = this.InstrReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * InstrReverbProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            InstrReverbProcessor.parse_ui(this.json_object.ui, this, InstrReverbProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, InstrReverbProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, InstrReverbProcessor.buffer_size, this.ins, this.outs);
        
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

InstrReverbProcessor.buffer_size = 128;

InstrReverbProcessor.importObject = {
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
    if (InstrReverbProcessor.wasm_module == undefined) {
        InstrReverbProcessor.wasm_module = new WebAssembly.Module(InstrReverbProcessor.atob(getBase64CodeInstrReverb()));
        registerProcessor('InstrReverb', InstrReverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust InstrReverb cannot be loaded or compiled");
}

