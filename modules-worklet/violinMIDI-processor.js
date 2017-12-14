
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONviolinMIDI() {
	return "{\"name\":\"ViolinMidi\",\"version\":\"2.5.12\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"33024\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple MIDI-controllable violin physical model.\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ViolinMidi\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"violin\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/violin/midi/freq\",\"index\":\"64\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/violin/midi/bend\",\"index\":\"68\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/violin/midi/gain\",\"index\":\"124\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"envAttack\",\"address\":\"/violin/midi/envAttack\",\"index\":\"132\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"30\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/violin/midi/sustain\",\"index\":\"76\",\"meta\":[{\"4\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"bow\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"pressure\",\"address\":\"/violin/bow/pressure\",\"index\":\"8372\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"position\",\"address\":\"/violin/bow/position\",\"index\":\"52\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"otherParams\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"vibratoFrequency\",\"address\":\"/violin/otherParams/vibratoFrequency\",\"index\":\"104\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoGain\",\"address\":\"/violin/otherParams/vibratoGain\",\"index\":\"96\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/violin/otherParams/outGain\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/violin/gate\",\"index\":\"72\",\"meta\":[{\"3\":\"\"}]}]}]}";
}
function getBase64CodeviolinMIDI() { return "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cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpUm9tYWluIE1pY2hvbiwgQ0NSTUEgKFN0YW5mb3JkIFVuaXZlcnNpdHkpLCBHUkFNRSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IlNpbXBsZSBNSURJLWNvbnRyb2xsYWJsZSB2aW9saW4gcGh5c2ljYWwgbW9kZWwuIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJsaWNlbnNlIjoiTUlUIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJWaW9saW5NaWRpIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJ2aW9saW4iLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoibWlkaSIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZnJlcSIsImFkZHJlc3MiOiIvdmlvbGluL21pZGkvZnJlcSIsImluZGV4IjoiNjQiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0NDAiLCJtaW4iOiI1MCIsIm1heCI6IjEwMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbmQiLCJhZGRyZXNzIjoiL3Zpb2xpbi9taWRpL2JlbmQiLCJpbmRleCI6IjY4IiwibWV0YSI6W3siMSI6IiJ9LHsiaGlkZGVuIjoiMSJ9LHsibWlkaSI6InBpdGNod2hlZWwifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImdhaW4iLCJhZGRyZXNzIjoiL3Zpb2xpbi9taWRpL2dhaW4iLCJpbmRleCI6IjEyNCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJlbnZBdHRhY2siLCJhZGRyZXNzIjoiL3Zpb2xpbi9taWRpL2VudkF0dGFjayIsImluZGV4IjoiMTMyIiwibWV0YSI6W3siMyI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIzMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoic3VzdGFpbiIsImFkZHJlc3MiOiIvdmlvbGluL21pZGkvc3VzdGFpbiIsImluZGV4IjoiNzYiLCJtZXRhIjpbeyI0IjoiIn0seyJoaWRkZW4iOiIxIn0seyJtaWRpIjoiY3RybCA2NCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiYm93IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJwcmVzc3VyZSIsImFkZHJlc3MiOiIvdmlvbGluL2Jvdy9wcmVzc3VyZSIsImluZGV4IjoiODM3MiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJwb3NpdGlvbiIsImFkZHJlc3MiOiIvdmlvbGluL2Jvdy9wb3NpdGlvbiIsImluZGV4IjoiNTIiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjciLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Im90aGVyUGFyYW1zIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2aWJyYXRvRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii92aW9saW4vb3RoZXJQYXJhbXMvdmlicmF0b0ZyZXF1ZW5jeSIsImluZGV4IjoiMTA0IiwibWV0YSI6W3siMCI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNiIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoidmlicmF0b0dhaW4iLCJhZGRyZXNzIjoiL3Zpb2xpbi9vdGhlclBhcmFtcy92aWJyYXRvR2FpbiIsImluZGV4IjoiOTYiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoib3V0R2FpbiIsImFkZHJlc3MiOiIvdmlvbGluL290aGVyUGFyYW1zL291dEdhaW4iLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6ImdhdGUiLCJhZGRyZXNzIjoiL3Zpb2xpbi9nYXRlIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjMiOiIifV19XX1dfTA="; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class violinMIDI_polyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	violinMIDI_polyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            violinMIDI_polyProcessor.parse_items(group.items, obj, callback);
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
            violinMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
            violinMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= violinMIDI_polyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        violinMIDI_polyProcessor.parse_ui(JSON.parse(getJSONviolinMIDI()).ui, params, violinMIDI_polyProcessor.parse_item1);
        return params;
    }
    
    static createMemory(buffer_size, polyphony) 
    {
        // Memory allocator
        var ptr_size = 4;
        var sample_size = 4;
        
        function pow2limit(x)
        {
            var n = 65536; // Minimum = 64 kB
            while (n < x) { n = 2 * n; }
            return n;
        }
        
        // Keep JSON parsed object
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONviolinMIDI());
        } catch (e) {
            return null;
        }
        
        var memory_size = pow2limit(parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONviolinMIDI());
        
        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.debug = false;
        
        this.ins = null;
        this.outs = null;
        this.mixing = null;
        this.compute_handler = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.fFreqLabel = "";
        this.fGateLabel = "";
        this.fGainLabel = "";
        this.fDate = 0;
        
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }
   
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = violinMIDI_polyProcessor.violinMIDI_instance.exports;
        this.HEAP = violinMIDI_polyProcessor.memory.buffer;
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
        // this.audio_heap_ptr = 0; Fails when 0...
        this.audio_heap_ptr = 65536;
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        this.audio_heap_ptr_mixing = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_mixing + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = violinMIDI_polyProcessor.mixer_instance.exports;
        
        console.log(this.mixer);
        console.log(this.factory);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = violinMIDI_polyProcessor.polyphony;
        this.dsp_voices = [];
        this.dsp_voices_state = [];
        this.dsp_voices_level = [];
        this.dsp_voices_date = [];
        this.dsp_voices_trigger = [];
        
        this.kActiveVoice = 0;
        this.kFreeVoice = -1;
        this.kReleaseVoice = -2;
        this.kNoVoice = -3;
     
        this.pathTable = [];
        
        // Allocate table for 'setParamValue'
        this.value_table = [];
        
        for (var i = 0; i <  this.polyphony; i++) {
            this.dsp_voices[i] = this.dsp_start + i * parseInt(this.json_object.size);
            this.dsp_voices_state[i] = this.kFreeVoice;
            this.dsp_voices_level[i] = 0;
            this.dsp_voices_date[i] = 0;
            this.dsp_voices_trigger[i] = false;
        }
        
        this.getPlayingVoice = function(pitch)
        {
            var voice_playing = this.kNoVoice;
            var oldest_date_playing = Number.MAX_VALUE;
            
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === pitch) {
                    // Keeps oldest playing voice
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            return voice_playing;
        }
        
        // Always returns a voice
        this.allocVoice = function(voice)
        {
            this.dsp_voices_date[voice] = this.fDate++;
            this.dsp_voices_trigger[voice] = true;    //so that envelop is always re-initialized
            this.dsp_voices_state[voice] = this.kActiveVoice;
            return voice;
        }
        
        this.getFreeVoice = function()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === this.kFreeVoice) {
                    return this.allocVoice(i);
                }
            }
            
            var voice_release = this.kNoVoice;
            var voice_playing = this.kNoVoice;
            var oldest_date_release = Number.MAX_VALUE;
            var oldest_date_playing = Number.MAX_VALUE;
            
            // Scan all voices
            for (var i = 0; i <  this.polyphony; i++) {
                // Try to steal a voice in kReleaseVoice mode...
                if (this.dsp_voices_state[i] === this.kReleaseVoice) {
                    // Keeps oldest release voice
                    if (this.dsp_voices_date[i] < oldest_date_release) {
                        oldest_date_release = this.dsp_voices_date[i];
                        voice_release = i;
                    }
                } else {
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            // Then decide which one to steal
            if (oldest_date_release != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
                return this.allocVoice(voice_playing);
            } else {
                return this.kNoVoice;
            }
        }
        
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.midiToFreq = function (note)
        {
            return 440.0 * Math.pow(2.0, (note - 69.0) / 12.0);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + violinMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + violinMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
             // Parse UI
            violinMIDI_polyProcessor.parse_ui(this.json_object.ui, this, violinMIDI_polyProcessor.parse_item2);
            
            // keep 'keyOn/keyOff' labels
            for (i = 0; i < this.inputs_items.length; i++) {
                if (this.inputs_items[i].endsWith("/gate")) {
                    this.fGateLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGateLabel);
                } else if (this.inputs_items[i].endsWith("/freq")) {
                    this.fFreqLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fFreqLabel);
                } else if (this.inputs_items[i].endsWith("/gain")) {
                    this.fGainLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGainLabel);
                }
            }
            
            // Init DSP voices
            for (i = 0; i <  this.polyphony; i++) {
                this.factory.init(this.dsp_voices[i], sampleRate);  // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
        }
        
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            if (this.debug)
                console.log("keyOn voice %d", voice);
            this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel, this.midiToFreq(pitch));
            this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel, velocity/127.);
            this.dsp_voices_state[voice] = pitch;
        }
        
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                if (this.debug)
                    console.log("keyOff voice %d", voice);
                // No use of velocity for now...
                this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel, 0.0);
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                if (this.debug)
                    console.log("Playing voice not found...\n");
            }
        }
        
        this.allNotesOff = function ()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                this.dsp_voices_state[i] = this.kReleaseVoice;
            }
        }
        
        this.ctrlChange = function (channel, ctrl, value)
        {
            if (ctrl === 123 || ctrl === 120) {
                this.allNotesOff();
            }
            
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, violinMIDI_polyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            for (var i = 0; i < this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
            }
        }

        this.getParamValue = function (path)
        {
            return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
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
            this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
      
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(violinMIDI_polyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(violinMIDI_polyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], violinMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], violinMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(violinMIDI_polyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.001) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
        }
        
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

// Create memory block
violinMIDI_polyProcessor.buffer_size = 128;
violinMIDI_polyProcessor.polyphony = 16;

violinMIDI_polyProcessor.memory = violinMIDI_polyProcessor.createMemory(violinMIDI_polyProcessor.buffer_size, violinMIDI_polyProcessor.polyphony);

// Create Mixer
violinMIDI_polyProcessor.mixObject = { imports: { print: arg => console.log(arg) } }
violinMIDI_polyProcessor.mixObject["memory"] = { "memory": violinMIDI_polyProcessor.memory };

violinMIDI_polyProcessor.importObject = {
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
        
        memory: violinMIDI_polyProcessor.memory,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(violinMIDI_polyProcessor.atob(getBase64Mixer()));
    violinMIDI_polyProcessor.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, violinMIDI_polyProcessor.mixObject);
    let wasm_module = new WebAssembly.Module(violinMIDI_polyProcessor.atob(getBase64CodeviolinMIDI()));
    violinMIDI_polyProcessor.violinMIDI_instance = new WebAssembly.Instance(wasm_module, violinMIDI_polyProcessor.importObject);
    registerProcessor('violinMIDI_poly', violinMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust violinMIDI_poly cannot be loaded or compiled");
}

