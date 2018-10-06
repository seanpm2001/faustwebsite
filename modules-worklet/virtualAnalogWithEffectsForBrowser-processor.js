
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONvirtualAnalogWithEffectsForBrowser() {
	return "{\"name\":\"freeverb\",\"filename\":\"virtualAnalogWithEffectsForBrowser\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"49744\",\"inputs\":\"1\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Grame\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"designer\":\"Robert A. Moog\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"freeverb\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"freeverb\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Minimoog\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Controllers\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Master Volume\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"MasterVolume\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Master_Volume/MasterVolume\",\"index\":\"49724\",\"meta\":[{\"midi\":\"ctrl 7\"},{\"style\":\"knob\"},{\"tooltip\":\"master volume, MIDI controlled\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator Tuning & Switching\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Tune\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Tune\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 47\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency-shift up or down for all oscillators in Octaves\"},{\"unit\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc. Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._Mod.\",\"index\":\"52\",\"meta\":[{\"0\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 22\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Osc. 3 Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._3_Ctl\",\"index\":\"100\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 9\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Glide and ModMix\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Glide\",\"index\":\"112\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 5\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Portamento (frequency-glide) in seconds per octave\"},{\"unit\":\"sec/octave\"}],\"init\":\"0.008\",\"min\":\"0.001\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Mod. Mix\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Mod._Mix\",\"index\":\"56\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 48\"},{\"style\":\"knob\"},{\"tooltip\":\"Modulation Mix: Osc3 (0) to Noise (1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]},{\"type\":\"vgroup\",\"label\":\"Oscillator Bank\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Oscillator 1\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Octave1\",\"index\":\"20\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 23\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/DeTuning1\",\"index\":\"48\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 24\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Waveform1\",\"index\":\"8\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 25\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Octave2\",\"index\":\"33100\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 28\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/DeTuning2\",\"index\":\"33104\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 29\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.41667\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Waveform2\",\"index\":\"33096\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 30\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 3\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Octave3\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 33\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/DeTuning3\",\"index\":\"96\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 34\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.3\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Waveform3\",\"index\":\"88\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 35\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Mixer\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Osc1\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc1 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/Osc1_Amp\",\"index\":\"0\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 26\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/On\",\"index\":\"4\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 12\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Ext In, KeyCtl\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Ext Input\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/Ext_Input\",\"index\":\"49584\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 27\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/On\",\"index\":\"49588\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 13\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Osc2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc2 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/Osc2_Amp\",\"index\":\"33088\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 31\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/On\",\"index\":\"33092\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 14\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Noise\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Noise Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/Noise_Amp\",\"index\":\"49568\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 32\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/On\",\"index\":\"49564\",\"meta\":[{\"0\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 15\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"White/Pink\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/White/Pink\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 16\"},{\"style\":\"knob\"},{\"tooltip\":\"Choose either White or Pink Noise\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Osc3\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc3 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/Osc3_Amp\",\"index\":\"49556\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 36\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/On\",\"index\":\"49560\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 17\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Modifiers\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Filter\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"freq, Q, ContourScale\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"two checkboxes\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Filter Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Filter_Mod.\",\"index\":\"49600\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 19\"},{\"style\":\"knob\"},{\"tooltip\":\"Filter Modulation => Route Modulation Mix output to VCF frequency\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Kbd Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Kbd_Ctl\",\"index\":\"49604\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 38\"},{\"style\":\"knob\"},{\"tooltip\":\"Keyboard tracking of VCF corner-frequency (0=none, 1=full)\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vslider\",\"label\":\"Corner Freq\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Freq\",\"index\":\"49608\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 74\"},{\"style\":\"knob\"},{\"tooltip\":\"Corner resonance frequency in Log2(Hertz)\"},{\"unit\":\"Log2(Hz)\"}],\"init\":\"10.6\",\"min\":\"5.32193\",\"max\":\"14.2877\",\"step\":\"1e-06\"},{\"type\":\"vslider\",\"label\":\"Corner Resonance\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Resonance\",\"index\":\"49592\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 37\"},{\"style\":\"knob\"},{\"tooltip\":\"Resonance Q at VCF corner frequency (0 to 1)\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Amount of Contour (octaves)\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Amount_of_Contour_(octaves)\",\"index\":\"49620\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 39\"},{\"style\":\"knob\"}],\"init\":\"1.2\",\"min\":\"0\",\"max\":\"4\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Filter Contour\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"AttFilt, DecFilt, Sustain Level for Filter Contour\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/AttackF\",\"index\":\"49648\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 40\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"1400\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DecayF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/DecayF\",\"index\":\"49632\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 41\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"SustainF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/SustainF\",\"index\":\"49652\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 42\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Loudness Contour\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/AttackA\",\"index\":\"49700\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 43\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"2\",\"min\":\"0\",\"max\":\"5000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"DecayA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/DecayA\",\"index\":\"49696\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 44\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0\",\"max\":\"10000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"SustainA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/SustainA\",\"index\":\"49704\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 45\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"Keyboard Group\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Wheels and Switches\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Wheels+\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Bend and Mod Wheels\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Decay\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Decay\",\"index\":\"49628\",\"meta\":[{\"midi\":\"ctrl 20\"},{\"style\":\"knob\"},{\"tooltip\":\"Envelope Release either Decay value or 0\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Glide\",\"index\":\"104\",\"meta\":[{\"midi\":\"ctrl 65\"},{\"style\":\"knob\"},{\"tooltip\":\"Glide from note to note\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/bend\",\"index\":\"140\",\"meta\":[{\"0\":\"\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"mod\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/mod\",\"index\":\"16628\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"},{\"tooltip\":\"PitchModulation amplitude in octaves\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Keys\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Gates\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gateHold\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gateHold\",\"index\":\"124\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"lock sustain pedal on (hold gate set at 1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gate\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"The gate signal is 1 during a  note and 0 otherwise. For MIDI, NoteOn occurs when the gate  transitions from 0 to 1, and NoteOff is an event corresponding  to the gate transition from 1 to 0. The name of this Faust  button must be 'gate'.\"}]},{\"type\":\"button\",\"label\":\"sustain\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/sustain\",\"index\":\"128\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 64\"},{\"tooltip\":\"extends the gate (keeps it set to 1)\"}]}]}]},{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/freq\",\"index\":\"116\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"0.1\",\"max\":\"20000\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Output\",\"meta\":[{\"8\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Volume Main Output\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gain\",\"address\":\"/freeverb/Effects/Output/Volume_Main_Output/gain\",\"index\":\"49572\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Amplitude\"}],\"init\":\"0.2\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}]}]}]}";
}
function getBase64CodevirtualAnalogWithEffectsForBrowser() { return "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KgIAOAIAIAYgKWogAEHIhANqKgIAOAIAIABBEGogAEEMaigCADYCACAAQcQAaiAAQcAAaigCADYCAEEDITgDQAJAIABByAAgOEECdGpqIABByAAgOEEBa0ECdGpqKgIAOAIAIDhBAWshOCA4QQBKBEAMAgwBCwsLIABBiAFqIABBhAFqKgIAOAIAIABBlAFqIABBkAFqKgIAOAIAIABBnAFqIABBmAFqKgIAOAIAIABBpAFqIABBoAFqKgIAOAIAIABBrAFqIABBqAFqKgIAOAIAIABBvAFqIABBuAFqKgIAOAIAIABBxAFqIABBwAFqKgIAOAIAIABBzAFqIABByAFqKgIAOAIAIABB0AFqIABB0AFqKAIAQQFqNgIAIABB3IEBaiAAQdiBAWoqAgA4AgAgAEHkgQFqIABB4IEBaioCADgCACAAQeyBAWogAEHogQFqKgIAOAIAIABB/IEBaiAAQfiBAWoqAgA4AgAgAEGEggFqIABBgIIBaioCADgCACAAQYyCAWogAEGIggFqKgIAOAIAIABBlIIBaiAAQZCCAWoqAgA4AgAgAEGcggFqIABBmIIBaioCADgCACAAQaSCAWogAEGgggFqKgIAOAIAIABBrIICaiAAQaiCAmoqAgA4AgAgAEG0ggJqIABBsIICaioCADgCACAAQbyCAmogAEG4ggJqKgIAOAIAIABB2IICaiAAQdSCAmoqAgA4AgAgAEHgggJqIABB3IICaioCADgCACAAQeiCAmogAEHkggJqKgIAOAIAIABB8IICaiAAQeyCAmoqAgA4AgAgAEH4ggJqIABB9IICaioCADgCACAAQYCDA2ogAEH8ggNqKgIAOAIAIABBiIMDaiAAQYSDA2oqAgA4AgAgAEGQgwNqIABBjIMDaioCADgCACAAQayDA2ogAEGogwNqKgIAOAIAIABB0IMDaiAAQcyDA2oqAgA4AgAgAEHogwNqIABB5IMDaigCADYCACAAQfyDA2ogAEH4gwNqKgIAOAIAIABBhIQDaiAAQYCEA2oqAgA4AgAgAEGMhANqIABBiIQDaioCADgCACAAQZSEA2ogAEGQhANqKgIAOAIAIABBnIQDaiAAQZiEA2oqAgA4AgAgAEGwhANqIABBrIQDaioCADgCACAAQcSEA2ogAEHAhANqKgIAOAIAIABBzIQDaiAAQciEA2oq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IAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL0/yAgAABAEEAC8x8eyJuYW1lIjoiZnJlZXZlcmIiLCJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIiLCJ2ZXJzaW9uIjoiMi4xMS41IiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiNDk3NDQiLCJpbnB1dHMiOiIxIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJHcmFtZSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IihjKSBHUkFNRSAyMDA2IGFuZCBNb0ZvcnRlIEluYy4gMjAxNyJ9LHsiZGVzaWduZXIiOiJSb2JlcnQgQS4gTW9vZyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImludGVyZmFjZSI6IlNtYXJ0S2V5Ym9hcmR7ICAgICAnTnVtYmVyIG9mIEtleWJvYXJkcyc6JzInLCAgICAgJ0tleWJvYXJkIDAgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAxIC0gTnVtYmVyIG9mIEtleXMnOicxMycsICAgICAnS2V5Ym9hcmQgMCAtIExvd2VzdCBLZXknOic3MicsICAgICAnS2V5Ym9hcmQgMSAtIExvd2VzdCBLZXknOic2MCcgfSJ9LHsibGljZW5zZSI6IkJTRCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiZnJlZXZlcmIifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZyZWV2ZXJiLmh0bWwifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiZnJlZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTWluaW1vb2ciLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDb250cm9sbGVycyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJNYXN0ZXIgVm9sdW1lIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJNYXN0ZXJWb2x1bWUiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvTWFzdGVyX1ZvbHVtZS9NYXN0ZXJWb2x1bWUiLCJpbmRleCI6IjQ5NzI0IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgNyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoibWFzdGVyIHZvbHVtZSwgTUlESSBjb250cm9sbGVkIn1dLCJpbml0IjoiMC43IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciBUdW5pbmcgJiBTd2l0Y2hpbmciLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlR1bmUiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvT3NjaWxsYXRvcl9UdW5pbmdfJl9Td2l0Y2hpbmcvVHVuZSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0NyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRnJlcXVlbmN5LXNoaWZ0IHVwIG9yIGRvd24gZm9yIGFsbCBvc2NpbGxhdG9ycyBpbiBPY3RhdmVzIn0seyJ1bml0IjoiT2N0YXZlcyJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MuIE1vZC4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvT3NjaWxsYXRvcl9UdW5pbmdfJl9Td2l0Y2hpbmcvU3dpdGNoZXMvT3NjLl9Nb2QuIiwiaW5kZXgiOiI1MiIsIm1ldGEiOlt7IjAiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCAyMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MuIDMgQ3RsIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL09zY2lsbGF0b3JfVHVuaW5nXyZfU3dpdGNoaW5nL1N3aXRjaGVzL09zYy5fM19DdGwiLCJpbmRleCI6IjEwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCA5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkdsaWRlIGFuZCBNb2RNaXgiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkdsaWRlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL0dsaWRlX2FuZF9Nb2RNaXgvR2xpZGUiLCJpbmRleCI6IjExMiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDUifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQb3J0YW1lbnRvIChmcmVxdWVuY3ktZ2xpZGUpIGluIHNlY29uZHMgcGVyIG9jdGF2ZSJ9LHsidW5pdCI6InNlYy9vY3RhdmUifV0sImluaXQiOiIwLjAwOCIsIm1pbiI6IjAuMDAxIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik1vZC4gTWl4IiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL0dsaWRlX2FuZF9Nb2RNaXgvTW9kLl9NaXgiLCJpbmRleCI6IjU2IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNDgifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ik1vZHVsYXRpb24gTWl4OiBPc2MzICgwKSB0byBOb2lzZSAoMSkifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIEJhbmsiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciAxIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPY3RhdmUxIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzEvT2N0YXZlMSIsImluZGV4IjoiMjAiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAyMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZVR1bmluZzEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMS9EZVR1bmluZzEiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMjQifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdHMiOiJPY3RhdmVzIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhdmVmb3JtMSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8xL1dhdmVmb3JtMSIsImluZGV4IjoiOCIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDI1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIDIiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9jdGF2ZTIiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMi9PY3RhdmUyIiwiaW5kZXgiOiIzMzEwMCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDI4In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlVHVuaW5nMiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8yL0RlVHVuaW5nMiIsImluZGV4IjoiMzMxMDQiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAyOSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0cyI6Ik9jdGF2ZXMifV0sImluaXQiOiIwLjQxNjY3IiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZWZvcm0yIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzIvV2F2ZWZvcm0yIiwiaW5kZXgiOiIzMzA5NiIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDMwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIDMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9jdGF2ZTMiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMy9PY3RhdmUzIiwiaW5kZXgiOiI5MiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDMzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlVHVuaW5nMyIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8zL0RlVHVuaW5nMyIsImluZGV4IjoiOTYiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzNCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0cyI6Ik9jdGF2ZXMifV0sImluaXQiOiIwLjMiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXZlZm9ybTMiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMy9XYXZlZm9ybTMiLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMzUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiTWl4ZXIiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjMSIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjMSBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMS9Pc2MxX0FtcCIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDI2In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzEvT24iLCJpbmRleCI6IjQiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFeHQgSW4sIEtleUN0bCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXh0IElucHV0IiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL0V4dF9JbixfS2V5Q3RsL0V4dF9JbnB1dCIsImluZGV4IjoiNDk1ODQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAyNyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvRXh0X0luLF9LZXlDdGwvT24iLCJpbmRleCI6IjQ5NTg4IiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjMiIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjMiBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMi9Pc2MyX0FtcCIsImluZGV4IjoiMzMwODgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAzMSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MyL09uIiwiaW5kZXgiOiIzMzA5MiIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik5vaXNlIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJOb2lzZSBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvTm9pc2UvTm9pc2VfQW1wIiwiaW5kZXgiOiI0OTU2OCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDMyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL05vaXNlLzB4MDAvT24iLCJpbmRleCI6IjQ5NTY0IiwibWV0YSI6W3siMCI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXaGl0ZS9QaW5rIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL05vaXNlLzB4MDAvV2hpdGUvUGluayIsImluZGV4IjoiNjAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE2In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDaG9vc2UgZWl0aGVyIFdoaXRlIG9yIFBpbmsgTm9pc2UifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zYzMiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYzMgQW1wIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzMvT3NjM19BbXAiLCJpbmRleCI6IjQ5NTU2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMzYifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMy9PbiIsImluZGV4IjoiNDk1NjAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE3In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1vZGlmaWVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGaWx0ZXIiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJmcmVxLCBRLCBDb250b3VyU2NhbGUifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6InR3byBjaGVja2JveGVzIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkZpbHRlciBNb2QuIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC8weDAwL0ZpbHRlcl9Nb2QuIiwiaW5kZXgiOiI0OTYwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCAxOSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRmlsdGVyIE1vZHVsYXRpb24gPT4gUm91dGUgTW9kdWxhdGlvbiBNaXggb3V0cHV0IHRvIFZDRiBmcmVxdWVuY3kifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IktiZCBDdGwiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwLzB4MDAvS2JkX0N0bCIsImluZGV4IjoiNDk2MDQiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzOCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiS2V5Ym9hcmQgdHJhY2tpbmcgb2YgVkNGIGNvcm5lci1mcmVxdWVuY3kgKDA9bm9uZSwgMT1mdWxsKSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQ29ybmVyIEZyZXEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwL0Nvcm5lcl9GcmVxIiwiaW5kZXgiOiI0OTYwOCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDc0In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDb3JuZXIgcmVzb25hbmNlIGZyZXF1ZW5jeSBpbiBMb2cyKEhlcnR6KSJ9LHsidW5pdCI6IkxvZzIoSHopIn1dLCJpbml0IjoiMTAuNiIsIm1pbiI6IjUuMzIxOTMiLCJtYXgiOiIxNC4yODc3Iiwic3RlcCI6IjFlLTA2In0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQ29ybmVyIFJlc29uYW5jZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvQ29ybmVyX1Jlc29uYW5jZSIsImluZGV4IjoiNDk1OTIiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzNyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUmVzb25hbmNlIFEgYXQgVkNGIGNvcm5lciBmcmVxdWVuY3kgKDAgdG8gMSkifV0sImluaXQiOiIwLjciLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQW1vdW50IG9mIENvbnRvdXIgKG9jdGF2ZXMpIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC9BbW91bnRfb2ZfQ29udG91cl8ob2N0YXZlcykiLCJpbmRleCI6IjQ5NjIwIiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMzkifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEuMiIsIm1pbiI6IjAiLCJtYXgiOiI0Iiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkZpbHRlciBDb250b3VyIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IkF0dEZpbHQsIERlY0ZpbHQsIFN1c3RhaW4gTGV2ZWwgZm9yIEZpbHRlciBDb250b3VyIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkF0dGFja0YiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci9GaWx0ZXJfQ29udG91ci9BdHRhY2tGIiwiaW5kZXgiOiI0OTY0OCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJBdHRhY2sgVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTQwMCIsIm1pbiI6IjEwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlY2F5RiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyL0ZpbHRlcl9Db250b3VyL0RlY2F5RiIsImluZGV4IjoiNDk2MzIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0MSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRGVjYXktdG8tU3VzdGFpbiBUaW1lIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIxMCIsIm1pbiI6IjEwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlN1c3RhaW5GIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvRmlsdGVyX0NvbnRvdXIvU3VzdGFpbkYiLCJpbmRleCI6IjQ5NjUyIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlN1c3RhaW4gbGV2ZWwgYXMgcGVyY2VudCBvZiBtYXgifV0sImluaXQiOiI4MCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4xIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiTG91ZG5lc3MgQ29udG91ciIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQXR0YWNrQSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvTG91ZG5lc3NfQ29udG91ci9BdHRhY2tBIiwiaW5kZXgiOiI0OTcwMCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQzIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJBdHRhY2sgVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMiIsIm1pbiI6IjAiLCJtYXgiOiI1MDAwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlY2F5QSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvTG91ZG5lc3NfQ29udG91ci9EZWNheUEiLCJpbmRleCI6IjQ5Njk2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDQifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkRlY2F5LXRvLVN1c3RhaW4gVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTAiLCJtaW4iOiIwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiU3VzdGFpbkEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0xvdWRuZXNzX0NvbnRvdXIvU3VzdGFpbkEiLCJpbmRleCI6IjQ5NzA0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDUifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlN1c3RhaW4gbGV2ZWwgYXMgcGVyY2VudCBvZiBtYXgifV0sImluaXQiOiI4MCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4xIn1dfV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJLZXlib2FyZCBHcm91cCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGVlbHMgYW5kIFN3aXRjaGVzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiV2hlZWxzKyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiQmVuZCBhbmQgTW9kIFdoZWVscyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWNheSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvV2hlZWxzX2FuZF9Td2l0Y2hlcy8weDAwLzB4MDAvRGVjYXkiLCJpbmRleCI6IjQ5NjI4IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgMjAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkVudmVsb3BlIFJlbGVhc2UgZWl0aGVyIERlY2F5IHZhbHVlIG9yIDAifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkdsaWRlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9XaGVlbHNfYW5kX1N3aXRjaGVzLzB4MDAvMHgwMC9HbGlkZSIsImluZGV4IjoiMTA0IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgNjUifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdsaWRlIGZyb20gbm90ZSB0byBub3RlIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJiZW5kIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9XaGVlbHNfYW5kX1N3aXRjaGVzLzB4MDAvMHgwMC9iZW5kIiwiaW5kZXgiOiIxNDAiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoicGl0Y2h3aGVlbCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAuMDAxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Im1vZCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvV2hlZWxzX2FuZF9Td2l0Y2hlcy8weDAwLzB4MDAvbW9kIiwiaW5kZXgiOiIxNjYyOCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDEifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBpdGNoTW9kdWxhdGlvbiBhbXBsaXR1ZGUgaW4gb2N0YXZlcyJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IktleXMifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6IkdhdGVzIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6ImdhdGVIb2xkIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC8weDAwLzB4MDAvZ2F0ZUhvbGQiLCJpbmRleCI6IjEyNCIsIm1ldGEiOlt7IjAiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6ImxvY2sgc3VzdGFpbiBwZWRhbCBvbiAoaG9sZCBnYXRlIHNldCBhdCAxKSJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiYnV0dG9uIiwibGFiZWwiOiJnYXRlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC8weDAwLzB4MDAvZ2F0ZSIsImluZGV4IjoiMTIwIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRoZSBnYXRlIHNpZ25hbCBpcyAxIGR1cmluZyBhICBub3RlIGFuZCAwIG90aGVyd2lzZS4gRm9yIE1JREksIE5vdGVPbiBvY2N1cnMgd2hlbiB0aGUgZ2F0ZSAgdHJhbnNpdGlvbnMgZnJvbSAwIHRvIDEsIGFuZCBOb3RlT2ZmIGlzIGFuIGV2ZW50IGNvcnJlc3BvbmRpbmcgIHRvIHRoZSBnYXRlIHRyYW5zaXRpb24gZnJvbSAxIHRvIDAuIFRoZSBuYW1lIG9mIHRoaXMgRmF1c3QgIGJ1dHRvbiBtdXN0IGJlICdnYXRlJy4ifV19LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoic3VzdGFpbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvMHgwMC8weDAwL3N1c3RhaW4iLCJpbmRleCI6IjEyOCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDY0In0seyJ0b29sdGlwIjoiZXh0ZW5kcyB0aGUgZ2F0ZSAoa2VlcHMgaXQgc2V0IHRvIDEpIn1dfV19XX0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZnJlcSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvZnJlcSIsImluZGV4IjoiMTE2IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIwLjEiLCJtYXgiOiIyMDAwMCIsInN0ZXAiOiIwLjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFZmZlY3RzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik91dHB1dCIsIm1ldGEiOlt7IjgiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJWb2x1bWUgTWFpbiBPdXRwdXQiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6ImdhaW4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL0VmZmVjdHMvT3V0cHV0L1ZvbHVtZV9NYWluX091dHB1dC9nYWluIiwiaW5kZXgiOiI0OTU3MiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkFtcGxpdHVkZSJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfV19XX1dfV19"; }


/*
Code generated with Faust version 2.11.5
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONeffect() {
	return "{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\",\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/Documents/faustwebsite-github/modules-worklet/virtualAnalogWithEffectsForBrowser.dsp\",\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/filter.lib\",\"/usr/local/share/faust/music.lib\",\"/usr/local/share/faust/math.lib\",\"/usr/local/share/faust/routes.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"910860\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"filter.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"filter.lib/copyright\":\"Julius O. Smith III\"},{\"filter.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"filter.lib/license\":\"STK-4.3\"},{\"filter.lib/name\":\"Faust Filter Library\"},{\"filter.lib/reference\":\"https://ccrma.stanford.edu/~jos/filters/\"},{\"filter.lib/version\":\"1.29\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"math.lib/author\":\"GRAME\"},{\"math.lib/copyright\":\"GRAME\"},{\"math.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"math.lib/license\":\"LGPL with exception\"},{\"math.lib/name\":\"Math Library\"},{\"math.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"music.lib/author\":\"GRAME\"},{\"music.lib/copyright\":\"GRAME\"},{\"music.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"music.lib/license\":\"LGPL with exception\"},{\"music.lib/name\":\"Music Library\"},{\"music.lib/version\":\"1.0\"},{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"virtualAnalogWithEffectsForBrowser.dsp/author\":\"Grame\"},{\"virtualAnalogWithEffectsForBrowser.dsp/copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"virtualAnalogWithEffectsForBrowser.dsp/designer\":\"Robert A. Moog\"},{\"virtualAnalogWithEffectsForBrowser.dsp/interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"virtualAnalogWithEffectsForBrowser.dsp/license\":\"BSD\"},{\"virtualAnalogWithEffectsForBrowser.dsp/name\":\"freeverb\"},{\"virtualAnalogWithEffectsForBrowser.dsp/reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"virtualAnalogWithEffectsForBrowser.dsp/version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"virtualAnalogWithEffectsForBrowser_effect\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Echo\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Delay\",\"index\":\"786584\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 61\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0.001\",\"max\":\"0.742039\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Warp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Warp\",\"index\":\"786604\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 62\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"DelayT60\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/DelayT60\",\"index\":\"786576\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 60\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Feedback\",\"index\":\"524424\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"}],\"init\":\"0.3\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Amp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Amp\",\"index\":\"524404\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 75\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"FeedbackSm\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/FeedbackSm\",\"index\":\"524416\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 76\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1e-05\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"EnableEcho\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Switches/EnableEcho\",\"index\":\"524420\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 105\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Flanger\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Delay\",\"index\":\"803028\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 50\"},{\"style\":\"knob\"}],\"init\":\"0.22\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Rate\",\"index\":\"524364\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 51\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Depth\",\"index\":\"803044\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 52\"},{\"style\":\"knob\"}],\"init\":\"0.75\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Feedback\",\"index\":\"786632\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 53\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-0.995\",\"max\":\"0.99\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveshape\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Waveshape\",\"index\":\"524356\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 54\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Enable\",\"index\":\"524352\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Invert\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Invert\",\"index\":\"803040\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 49\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Chorus\",\"meta\":[{\"6\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Delay\",\"index\":\"835824\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 55\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Rate\",\"index\":\"835852\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 56\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0.01\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Depth\",\"index\":\"524340\",\"meta\":[{\"4\":\"\"},{\"midi\":\"ctrl 57\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Deviation\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Deviation\",\"index\":\"835836\",\"meta\":[{\"6\":\"\"},{\"midi\":\"ctrl 58\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Switches/Enable\",\"index\":\"524320\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 103\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"7\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Damp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Damp\",\"index\":\"524308\",\"meta\":[{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"RoomSize\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/RoomSize\",\"index\":\"524304\",\"meta\":[{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"Wet\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Wet\",\"index\":\"524300\",\"meta\":[{\"midi\":\"ctrl 79\"},{\"style\":\"knob\"}],\"init\":\"0.3333\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Switches/Enable\",\"index\":\"524296\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 104\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}]}]}]}";
}
function getBase64Codeeffect() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0Cv4CAgAAFA2VudgZtZW1vcnkCAAEDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDj4CAgAAOAAEEBQYHCAkKCwwNDhAHsYGAgAALB2NvbXB1dGUABQxnZXROdW1JbnB1dHMABg1nZXROdW1PdXRwdXRzAAcNZ2V0UGFyYW1WYWx1ZQAIDWdldFNhbXBsZVJhdGUACQRpbml0AAoNaW5zdGFuY2VDbGVhcgALEWluc3RhbmNlQ29uc3RhbnRzAAwMaW5zdGFuY2VJbml0AA0aaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADg1zZXRQYXJhbVZhbHVlABEKw+WAgAAO0IKAgAABBH9BACEDQQAhBUEAIQJBACECA0ACQCAAQfzLNyACQQJ0ampBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAIABB/Ms3aiAAQYDMN2ooAgBBAWo2AgAgAEEAIANBAnRqakPbD8k4IABB/Ms3aigCAEF/arKUEAA4AgAgAEGAzDdqIABB/Ms3aigCADYCACADQQFqIQMgA0GAgARIBEAMAgwBCwsLQQAhBEEAIQQDQAJAIABBhMw3IARBAnRqakEANgIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkAgAEGEzDdqIABBiMw3aigCAEEBajYCACAAQYCAECAFQQJ0ampD2w/JOCAAQYTMN2ooAgBBf2qylBADOAIAIABBiMw3aiAAQYTMN2ooAgA2AgAgBUEBaiEFIAVBgIAESARADAIMAQsLCwvQwoCAAAIhf359QQAhBEEAIQVBACEGQQAhB0EAIQhDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQQAhCUMAAAAAISlBACEKQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQQAhC0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEEAIQxDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUEAIQ1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxBACEOQwAAAAAhTUEAIQ9BACEQQQAhEUMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFBACESQwAAAAAhUkEAIRNBACEUQQAhFUMAAAAAIVNDAAAAACFUQwAAAAAhVUMAAAAAIVZDAAAAACFXQwAAAAAhWEMAAAAAIVlDAAAAACFaQQAhFkMAAAAAIVtBACEXQQAhGEEAIRlDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRDAAAAACFlQwAAAAAhZkEAIRpDAAAAACFnQwAAAAAhaEMAAAAAIWlDAAAAACFqQQAhG0MAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQQAhHEMAAAAAIXBDAAAAACFxQwAAAAAhckMAAAAAIXNDAAAAACF0QQAhHUMAAAAAIXVBACEeQwAAAAAhdkMAAAAAIXdDAAAAACF4QQAhH0MAAAAAIXlBACEgQwAAAAAhekMAAAAAIXtDAAAAACF8QQAhIUMAAAAAIX1BACEiQwAAAAAhfkMAAAAAIX9DAAAAACGAAUEAISNDAAAAACGBAUEAISRDAAAAACGCAUMAAAAAIYMBQwAAAAAhhAFDAAAAACGFAUMAAAAAIYYBQwAAAAAhhwFDAAAAACGIAUMAAAAAIYkBQwAAAAAhigFDAAAAACGLAUMAAAAAIYwBQwAAAAAhjQFDAAAAACGOAUMAAAAAIY8BQwAAAAAhkAFDAAAAACGRAUMAAAAAIZIBQwAAAAAhkwFDAAAAACGUAUMAAAAAIZUBQwAAAAAhlgFDAAAAACGXAUMAAAAAIZgBQwAAAAAhmQFDAAAAACGaAUMAAAAAIZsBQwAAAAAhnAFDAAAAACGdAUMAAAAAIZ4BQwAAAAAhnwFDAAAAACGgAUMAAAAAIaEBQwAAAAAhogEgAkEAaigCACEEIAJBBGooAgAhBSADQQBqKAIAIQYgA0EEaigCACEHQQEgAEGIgCBqKgIAqGshCCAAQYyAIGoqAgAhJUMpXI8+IABBkIAgaioCAJRDMzMzP5IhJkPNzMw+IABBlIAgaioCAJQhJ0MAAIA/ICeTIShBASAAQaCAIGoqAgCoayEJIABBsIAgaioCACAAQbSAIGoqAgCUISlBASAAQcCAIGoqAgCoayEKIABBxIAgaioCACEqIABBsIAgaioCACAAQcyAIGoqAgCUIStDAAAAP0MAAIA/ICqTlCEsIABBsIAgaioCACAAQfSAIGoqAgCUIS1DAAAAQEMAAAAAQyTvv0AgAEGAgSBqKgIAlJMQAiEuQwAAgD8gLpMhL0MAAIA/IABBhIEgaioCAJOoIQsgAEGIgSBqKgIAITAgAEGQgTBqKgIAITFDAAAAACAAQZSBMGoqAgAgMZWTEAFDAAAAAEPnMBQ+IDGUQwAAAABeGyEyIABBqIAgaioCACAAQZiBMGoqAgCUITNDAACAPyAykyE0IDMgNJQhNSAAQayBMGoqAgAgNJQhNiAAQbCAIGoqAgAgAEHIgTBqKgIAlCE3QwBg+kQgAEHUgTFqKgIAlCE4IABB4IExaioCAKghDCAAQbCAIGoqAgAgAEHkgTFqKgIAlCE5Q28SA0EgAEHwgTNqKgIAlCE6Q28SgzggAEH8gTNqKgIAlCE7IABBsIAgaioCACAAQYyCM2oqAgCUITxDAACAPyAlkyE9QQAhDQNAAkAgAEGAgCBqQQE2AgAgJyAAQZyAIGoqAgCUICggAEHowjNqKgIAlJIhPiAAQZiAIGogPkMAAAAAID68QYCAgPwHcRs4AgAgKSAAQayAIGoqAgAgAEG8gCBqKgIAlJIhPyAAQbiAIGogP0MAAAAAID+8QYCAgPwHcRs4AgAgKyAAQayAIGoqAgAgAEHUgCBqKgIAlJIhQCAAQdCAIGogQEMAAAAAIEC8QYCAgPwHcRs4AgAgAEHcgCBqKgIAIABByIAgaioCACAAQdSAIGoqAgCUkiFBIEEgQY6TIUIgAEHYgCBqIEJDAAAAACBCvEGAgID8B3EbOAIAIABB4IAgaioCACAAQdCAIGoqAgCUIUMgQxADIUQgQxAAIUUgAEHwgCBqKgIAIESUIABB6IAgaioCACBFlJIhRiAAQeSAIGogRkMAAAAAIEa8QYCAgPwHcRs4AgBBASAAQYSAIGooAgBrsiAAQfCAIGoqAgAgRZSSIEQgAEHogCBqKgIAlJMhRyAAQeyAIGogR0MAAAAAIEe8QYCAgPwHcRs4AgAgKkMAAIA/QwAAAEAgAEHYgCBqKgIAlEMAAIC/kouTlCAsIABB5IAgaioCAEMAAIA/kpSSIUggBCANaioCACAFIA1qKgIAkiFJIC0gAEGsgCBqKgIAIABB/IAgaioCAJSSIUogAEH4gCBqIEpDAAAAACBKvEGAgID8B3EbOAIAIC8gAEGQgSAgAEGMgSBqKAIAQQFrQf//A3FBAnRqaioCAJQgLkMAAAAAIEkgCxsgMCAAQaiBMGoqAgCUkpSSIUsgAEGQgSAgAEGMgSBqKAIAQf//A3FBAnRqaiBLQwAAAAAgS7xBgICA/AdxGzgCACAAQaCBMGoqAgAgMpQgNZIhTCAAQZyBMGogTEMAAAAAIEy8QYCAgPwHcRs4AgAgAEGcgTBqKgIAqCEOIABBnIEwaioCAI4hTSAOQQFqIQ8gDkEAQQAgDkgbIRAgD0EAQQAgD0gbIREgAEGQgSAgAEGMgSBqKAIAQYGAAiAQQYGAAiAQSBtrQf//A3FBAnRqaioCACBNQwAAgD8gAEGcgTBqKgIAk5KUIABBnIEwaioCACBNkyAAQZCBICAAQYyBIGooAgBBgYACIBFBgYACIBFIG2tB//8DcUECdGpqKgIAlJIhTiAAQaSBMGogTkMAAAAAIE68QYCAgPwHcRs4AgAgMiAAQbSBMGoqAgCUIDaSIU8gAEGwgTBqIE9DAAAAACBPvEGAgID8B3EbOAIAIDIgAEG8gTBqKgIAlCFQIABBuIEwaiBQQwAAAAAgULxBgICA/AdxGzgCACAyIABBxIEwaioCAJQgMyA0IABBsIEwaioCACAAQbiBMGoqAgBDAAAAQBACkkMAAIA/kpSUkiFRIABBwIEwaiBRQwAAAAAgUbxBgICA/AdxGzgCACAAQcCBMGoqAgCoIRIgAEHAgTBqKgIAjiFSIBJBAWohEyASQQBBACASSBshFCATQQBBACATSBshFSAAQZCBICAAQYyBIGooAgBBgYACIBRBgYACIBRIG2tB//8DcUECdGpqKgIAIFJDAACAPyAAQcCBMGoqAgCTkpQgAEHAgTBqKgIAIFKTIABBkIEgIABBjIEgaigCAEGBgAIgFUGBgAIgFUgba0H//wNxQQJ0amoqAgCUkiFTIFNDAAAAACBTvEGAgID8B3EbIVQgSSAAQfiAIGoqAgAgVJSSIVVDAAAAACBVIAobIVYgNyAAQayAIGoqAgAgAEHQgTBqKgIAlJIhVyAAQcyBMGogV0MAAAAAIFe8QYCAgPwHcRs4AgAgAEHMgTBqKgIAIABB3IExaioCAJQgVpMhWCAAQdSBMCAAQYyBIGooAgBB/x9xQQJ0amogWDgCACA4IEiUIVkgWUMAADBCkiFaIFqoIRYgWo4hWyAWQQFqIRcgFkEAQQAgFkgbIRggF0EAQQAgF0gbIRkgAEHUgTAgAEGMgSBqKAIAQYEQIBhBgRAgGEgba0H/H3FBAnRqaioCACBbQwAALMIgWZOSlCBZQwAAMEIgW5OSIABB1IEwIABBjIEgaigCAEGBECAZQYEQIBlIG2tB/x9xQQJ0amoqAgCUkiFcIABB2IExaiBcQwAAAAAgXLxBgICA/AdxGzgCACA5IABBrIAgaioCACAAQeyBMWoqAgCUkiFdIABB6IExaiBdQwAAAAAgXbxBgICA/AdxGzgCACBVIFYgAEHYgTFqKgIAQwAAgL8gAEHogTFqKgIAlCAAQeiBMWoqAgAgDBuUkiAAQeiBMWoqAgBDAACAP5KVIAobIV5DAAAAACBeIAkbIV8gAEG4gCBqKgIAIF+UIWAgAEHwgTEgAEGMgSBqKAIAQf8/cUECdGpqIGA4AgAgOkN3vn8/IABB+IEzaioCAJSSIWEgAEH0gTNqIGFDAAAAACBhvEGAgID8B3EbOAIAQ3e+fz8gAEGEgjNqKgIAlCA7IABB9IEzaioCAJSSIWIgAEGAgjNqIGJDAAAAACBivEGAgID8B3EbOAIAIDwgAEGsgCBqKgIAIABBlIIzaioCAJSSIWMgAEGQgjNqIGNDAAAAACBjvEGAgID8B3EbOAIAIABBnIIzaioCACAAQYiCM2oqAgAgAEGQgjNqKgIAlJIhZCBkIGSOkyFlIABBmIIzaiBlQwAAAAAgZbxBgICA/AdxGzgCAEMAAABGQwAAwD4gAEH0gTNqKgIAlCAAQYCCM2oqAgAgAEEAQwAAgEcgAEGYgjNqKgIAlKhBAnRqaioCAJSSliFmIGaoIRogGrIhZyAAQaSCM2oqAgAgAEHIgCBqKgIAIABBkIIzaioCAJSSIWggaCBojpMhaSAAQaCCM2ogaUMAAAAAIGm8QYCAgPwHcRs4AgBDAAAARkMAAAA+IABB9IEzaioCAJQgAEGAgjNqKgIAIABBgIAQQwAAgEcgAEGggjNqKgIAlKhBAnRqaioCAJSSliFqIGqoIRsgG7Iha0MAAIA/IABBuIAgaioCAJMgX5QhbCAAQbCCM2oqAgAgAEGogjNqKgIAIABBkIIzaioCAJSSIW0gbSBtjpMhbiAAQayCM2ogbkMAAAAAIG68QYCAgPwHcRs4AgBDAAAARkMAAGA/IABB9IEzaioCAJQgAEGAgjNqKgIAQwAAAAAgAEEAQwAAgEcgAEGsgjNqKgIAlKhBAnRqaioCAJOUkpYhbyBvqCEcIByyIXAgXkPzBDU/IABB8IExIABBjIEgaigCACAaQf8/cWtB/z9xQQJ0amoqAgAgZ0MAAIA/IGaTkpQgZiBnkyAAQfCBMSAAQYyBIGooAgAgGkEBakH/P3FrQf8/cUECdGpqKgIAlJKUIGoga5MgAEHwgTEgAEGMgSBqKAIAIBtBAWpB/z9xa0H/P3FBAnRqaioCAJQgbCAAQfCBMSAAQYyBIGooAgAgG0H/P3FrQf8/cUECdGpqKgIAIGtDAACAPyBqk5KUkpKSQ/MENT8gAEHwgTEgAEGMgSBqKAIAIBxB/z9xa0H/P3FBAnRqaioCACBwQwAAgD8gb5OSlCBvIHCTIABB8IExIABBjIEgaigCACAcQQFqQf8/cWtB/z9xQQJ0amoqAgCUkpSTIAkbIXFDAAAAACBxIAgbIXIgAEG8gjNqKgIAIABBtIIzaioCACAAQZCCM2oqAgCUkiFzIHMgc46TIXQgAEG4gjNqIHRDAAAAACB0vEGAgID8B3EbOAIAQwAAgEcgAEG4gjNqKgIAlKghHUMAAABGQwAAgD4gAEH0gTNqKgIAlCAAQYCCM2oqAgBD8wQ1PyAAQYCAECAdQQJ0amoqAgCUQ/MENT8gAEEAIB1BAnRqaioCAJSSlJKWIXUgdaghHiAesiF2IABByIIzaioCACAAQcCCM2oqAgAgAEGQgjNqKgIAlJIhdyB3IHeOkyF4IABBxIIzaiB4QwAAAAAgeLxBgICA/AdxGzgCAEMAAIBHIABBxIIzaioCAJSoIR9DAAAARkMAAAA/IABB9IEzaioCAJQgAEGAgjNqKgIAQ/MENT8gAEEAIB9BAnRqaioCAJRD8wQ1PyAAQYCAECAfQQJ0amoqAgCUk5SSliF5IHmoISAgILIheiAAQdSCM2oqAgAgAEHMgjNqKgIAIABBkIIzaioCAJSSIXsgeyB7jpMhfCAAQdCCM2ogfEMAAAAAIHy8QYCAgPwHcRs4AgBDAACARyAAQdCCM2oqAgCUqCEhQwAAAEZDAABAPyAAQfSBM2oqAgCUIABBgIIzaioCAEMAAAAAQ/MENT8gAEGAgBAgIUECdGpqKgIAlEPzBDU/IABBACAhQQJ0amoqAgCUkpOUkpYhfSB9qCEiICKyIX4gAEHggjNqKgIAIABB2IIzaioCACAAQZCCM2oqAgCUkiF/IH8gf46TIYABIABB3IIzaiCAAUMAAAAAIIABvEGAgID8B3EbOAIAQwAAgEcgAEHcgjNqKgIAlKghI0MAAABGIABB9IEzaioCACAAQYCCM2oqAgBD8wQ1PyAAQYCAECAjQQJ0amoqAgCUQ/MENT8gAEEAICNBAnRqaioCAJSTlJKWIYEBIIEBqCEkICSyIYIBIF4gbEMV78M+IABB8IExIABBjIEgaigCACAeQf8/cWtB/z9xQQJ0amoqAgAgdkMAAIA/IHWTkpQgdSB2kyAAQfCBMSAAQYyBIGooAgAgHkEBakH/P3FrQf8/cUECdGpqKgIAlJKUQ16DbD8gAEHwgTEgAEGMgSBqKAIAICBB/z9xa0H/P3FBAnRqaioCACB6QwAAgD8geZOSlCB5IHqTIABB8IExIABBjIEgaigCACAgQQFqQf8/cWtB/z9xQQJ0amoqAgCUkiAAQfCBMSAAQYyBIGooAgAgIkH/P3FrQf8/cUECdGpqKgIAIH5DAACAPyB9k5KUIH0gfpMgAEHwgTEgAEGMgSBqKAIAICJBAWpB/z9xa0H/P3FBAnRqaioCAJSSkpSSQxXvwz4gAEHwgTEgAEGMgSBqKAIAICRB/z9xa0H/P3FBAnRqaioCACCCAUMAAIA/IIEBk5KUIIEBIIIBkyAAQfCBMSAAQYyBIGooAgAgJEEBakH/P3FrQf8/cUECdGpqKgIAlJKUkpMgCRshgwFDAAAAACCDASAIGyGEAUOPwnU8IHIghAGSlCGFASAAQeSCMyAAQYyBIGooAgBB/w9xQQJ0amogJiAAQZiAIGoqAgCUIIUBkjgCACAAQeSCMyAAQYyBIGooAgBB3AhrQf8PcUECdGpqKgIAIYYBIABB5MIzaiCGAUMAAAAAIIYBvEGAgID8B3EbOAIAICcgAEHwwjNqKgIAlCAoIABB+II0aioCAJSSIYcBIABB7MIzaiCHAUMAAAAAIIcBvEGAgID8B3EbOAIAIABB9MIzIABBjIEgaigCAEH/D3FBAnRqaiCFASAmIABB7MIzaioCAJSSOAIAIABB9MIzIABBjIEgaigCAEGkCWtB/w9xQQJ0amoqAgAhiAEgAEH0gjRqIIgBQwAAAAAgiAG8QYCAgPwHcRs4AgAgJyAAQYCDNGoqAgCUICggAEGIwzRqKgIAlJIhiQEgAEH8gjRqIIkBQwAAAAAgiQG8QYCAgPwHcRs4AgAgAEGEgzQgAEGMgSBqKAIAQf8PcUECdGpqIIUBICYgAEH8gjRqKgIAlJI4AgAgAEGEgzQgAEGMgSBqKAIAQf0Ja0H/D3FBAnRqaioCACGKASAAQYTDNGogigFDAAAAACCKAbxBgICA/AdxGzgCACAnIABBkMM0aioCAJQgKCAAQZiDNWoqAgCUkiGLASAAQYzDNGogiwFDAAAAACCLAbxBgICA/AdxGzgCACAAQZTDNCAAQYyBIGooAgBB/w9xQQJ0amoghQEgJiAAQYzDNGoqAgCUkjgCACAAQZTDNCAAQYyBIGooAgBBzAprQf8PcUECdGpqKgIAIYwBIABBlIM1aiCMAUMAAAAAIIwBvEGAgID8B3EbOAIAICcgAEGggzVqKgIAlCAoIABBqMM1aioCAJSSIY0BIABBnIM1aiCNAUMAAAAAII0BvEGAgID8B3EbOAIAIABBpIM1IABBjIEgaigCAEH/D3FBAnRqaiCFASAmIABBnIM1aioCAJSSOAIAIABBpIM1IABBjIEgaigCAEGOC2tB/w9xQQJ0amoqAgAhjgEgAEGkwzVqII4BQwAAAAAgjgG8QYCAgPwHcRs4AgAgJyAAQbDDNWoqAgCUICggAEG4gzZqKgIAlJIhjwEgAEGswzVqII8BQwAAAAAgjwG8QYCAgPwHcRs4AgAgAEG0wzUgAEGMgSBqKAIAQf8PcUECdGpqIIUBICYgAEGswzVqKgIAlJI4AgAgAEG0wzUgAEGMgSBqKAIAQdMLa0H/D3FBAnRqaioCACGQASAAQbSDNmogkAFDAAAAACCQAbxBgICA/AdxGzgCACAnIABBwIM2aioCAJQgKCAAQcjDNmoqAgCUkiGRASAAQbyDNmogkQFDAAAAACCRAbxBgICA/AdxGzgCACAAQcSDNiAAQYyBIGooAgBB/w9xQQJ0amoghQEgJiAAQbyDNmoqAgCUkjgCACAAQcSDNiAAQYyBIGooAgBBlQxrQf8PcUECdGpqKgIAIZIBIABBxMM2aiCSAUMAAAAAIJIBvEGAgID8B3EbOAIAICcgAEHQwzZqKgIAlCAoIABB2IM3aioCAJSSIZMBIABBzMM2aiCTAUMAAAAAIJMBvEGAgID8B3EbOAIAIABB1MM2IABBjIEgaigCAEH/D3FBAnRqaiCFASAmIABBzMM2aioCAJSSOAIAIABB1MM2IABBjIEgaigCAEHRDGtB/w9xQQJ0amoqAgAhlAEgAEHUgzdqIJQBQwAAAAAglAG8QYCAgPwHcRs4AgAgAEHkwjNqKgIAIABB9II0aioCAJIgAEGEwzRqKgIAkiAAQZSDNWoqAgCSIABBpMM1aioCAJIgAEG0gzZqKgIAkiAAQcTDNmoqAgCSIABB1IM3aioCAJIhlQEgAEHcgzcgAEGMgSBqKAIAQf8HcUECdGpqIJUBQwAAAD8gAEHgozdqKgIAlJI4AgAgAEHcgzcgAEGMgSBqKAIAQawEa0H/B3FBAnRqaioCACGWASAAQdyjN2oglgFDAAAAACCWAbxBgICA/AdxGzgCACAAQeCjN2oqAgAglQGTIZcBIJcBQwAAAAAglwG8QYCAgPwHcRshmAEgAEHkozcgAEGMgSBqKAIAQf8DcUECdGpqIJgBQwAAAD8gAEHoszdqKgIAlJI4AgAgAEHkozcgAEGMgSBqKAIAQbkDa0H/A3FBAnRqaioCACGZASAAQeSzN2ogmQFDAAAAACCZAbxBgICA/AdxGzgCACAAQeizN2oqAgAgmAGTIZoBIJoBQwAAAAAgmgG8QYCAgPwHcRshmwEgAEHsszcgAEGMgSBqKAIAQf8DcUECdGpqIJsBQwAAAD8gAEHwwzdqKgIAlJI4AgAgAEHsszcgAEGMgSBqKAIAQdUCa0H/A3FBAnRqaioCACGcASAAQezDN2ognAFDAAAAACCcAbxBgICA/AdxGzgCACAAQfDDN2oqAgAgmwGTIZ0BIJ0BQwAAAAAgnQG8QYCAgPwHcRshngEgAEH0wzcgAEGMgSBqKAIAQf8BcUECdGpqIJ4BQwAAAD8gAEH4yzdqKgIAlJI4AgAgAEH0wzcgAEGMgSBqKAIAQeEBa0H/AXFBAnRqaioCACGfASAAQfTLN2ognwFDAAAAACCfAbxBgICA/AdxGzgCACAAQfjLN2oqAgAgngGTIaABIKABQwAAAAAgoAG8QYCAgPwHcRshoQEgJSChAZQhogEgBiANaiBxIKIBID0gcpSSIAgbOAIAIAcgDWoggwEgogEgPSCEAZSSIAgbOAIAIABBhIAgaiAAQYCAIGooAgA2AgAgAEGcgCBqIABBmIAgaioCADgCACAAQbyAIGogAEG4gCBqKgIAOAIAIABB1IAgaiAAQdCAIGoqAgA4AgAgAEHcgCBqIABB2IAgaioCADgCACAAQeiAIGogAEHkgCBqKgIAOAIAIABB8IAgaiAAQeyAIGoqAgA4AgAgAEH8gCBqIABB+IAgaioCADgCACAAQYyBIGogAEGMgSBqKAIAQQFqNgIAIABBoIEwaiAAQZyBMGoqAgA4AgAgAEGogTBqIABBpIEwaioCADgCACAAQbSBMGogAEGwgTBqKgIAOAIAIABBvIEwaiAAQbiBMGoqAgA4AgAgAEHEgTBqIABBwIEwaioCADgCACAAQdCBMGogAEHMgTBqKgIAOAIAIABB3IExaiAAQdiBMWoqAgA4AgAgAEHsgTFqIABB6IExaioCADgCACAAQfiBM2ogAEH0gTNqKgIAOAIAIABBhIIzaiAAQYCCM2oqAgA4AgAgAEGUgjNqIABBkIIzaioCADgCACAAQZyCM2ogAEGYgjNqKgIAOAIAIABBpIIzaiAAQaCCM2oqAgA4AgAgAEGwgjNqIABBrIIzaioCADgCACAAQbyCM2ogAEG4gjNqKgIAOAIAIABByIIzaiAAQcSCM2oqAgA4AgAgAEHUgjNqIABB0IIzaioCADgCACAAQeCCM2ogAEHcgjNqKgIAOAIAIABB6MIzaiAAQeTCM2oqAgA4AgAgAEHwwjNqIABB7MIzaioCADgCACAAQfiCNGogAEH0gjRqKgIAOAIAIABBgIM0aiAAQfyCNGoqAgA4AgAgAEGIwzRqIABBhMM0aioCADgCACAAQZDDNGogAEGMwzRqKgIAOAIAIABBmIM1aiAAQZSDNWoqAgA4AgAgAEGggzVqIABBnIM1aioCADgCACAAQajDNWogAEGkwzVqKgIAOAIAIABBsMM1aiAAQazDNWoqAgA4AgAgAEG4gzZqIABBtIM2aioCADgCACAAQcCDNmogAEG8gzZqKgIAOAIAIABByMM2aiAAQcTDNmoqAgA4AgAgAEHQwzZqIABBzMM2aioCADgCACAAQdiDN2ogAEHUgzdqKgIAOAIAIABB4KM3aiAAQdyjN2oqAgA4AgAgAEHoszdqIABB5LM3aioCADgCACAAQfDDN2ogAEHswzdqKgIAOAIAIABB+Ms3aiAAQfTLN2oqAgA4AgAgDUEEaiENIA1BBCABbEgEQAwCDAELCwsLhYCAgAAAQQIPC4WAgIAAAEECDwuLgICAAAAgACABaioCAA8LjYCAgAAAIABBpIAgaigCAA8LjoCAgAAAIAAgARAEIAAgARANC8aZgIAAATx/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhK0EAISxBACEtQQAhLkEAIS9BACEwQQAhMUEAITJBACEzQQAhNEEAITVBACE2QQAhN0EAIThBACE5QQAhOkEAITtBACE8QQAhAQNAAkAgAEGAgCAgAUECdGpqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQCAAQZiAICACQQJ0ampDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAIABBuIAgIANBAnRqakMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQAhBANAAkAgAEHQgCAgBEECdGpqQwAAAAA4AgAgBEEBaiEEIARBAkgEQAwCDAELCwtBACEFA0ACQCAAQdiAICAFQQJ0ampDAAAAADgCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAIABB5IAgIAZBAnRqakMAAAAAOAIAIAZBAWohBiAGQQJIBEAMAgwBCwsLQQAhBwNAAkAgAEHsgCAgB0ECdGpqQwAAAAA4AgAgB0EBaiEHIAdBAkgEQAwCDAELCwtBACEIA0ACQCAAQfiAICAIQQJ0ampDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLCyAAQYyBIGpBADYCAEEAIQkDQAJAIABBkIEgIAlBAnRqakMAAAAAOAIAIAlBAWohCSAJQYCABEgEQAwCDAELCwtBACEKA0ACQCAAQZyBMCAKQQJ0ampDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAIABBpIEwIAtBAnRqakMAAAAAOAIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQAhDANAAkAgAEGwgTAgDEECdGpqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQCAAQbiBMCANQQJ0ampDAAAAADgCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAIABBwIEwIA5BAnRqakMAAAAAOAIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkAgAEHMgTAgD0ECdGpqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQCAAQdSBMCAQQQJ0ampDAAAAADgCACAQQQFqIRAgEEGAIEgEQAwCDAELCwtBACERA0ACQCAAQdiBMSARQQJ0ampDAAAAADgCACARQQFqIREgEUECSARADAIMAQsLC0EAIRIDQAJAIABB6IExIBJBAnRqakMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkAgAEHwgTEgE0ECdGpqQwAAAAA4AgAgE0EBaiETIBNBgMAASARADAIMAQsLC0EAIRQDQAJAIABB9IEzIBRBAnRqakMAAAAAOAIAIBRBAWohFCAUQQJIBEAMAgwBCwsLQQAhFQNAAkAgAEGAgjMgFUECdGpqQwAAAAA4AgAgFUEBaiEVIBVBAkgEQAwCDAELCwtBACEWA0ACQCAAQZCCMyAWQQJ0ampDAAAAADgCACAWQQFqIRYgFkECSARADAIMAQsLC0EAIRcDQAJAIABBmIIzIBdBAnRqakMAAAAAOAIAIBdBAWohFyAXQQJIBEAMAgwBCwsLQQAhGANAAkAgAEGggjMgGEECdGpqQwAAAAA4AgAgGEEBaiEYIBhBAkgEQAwCDAELCwtBACEZA0ACQCAAQayCMyAZQQJ0ampDAAAAADgCACAZQQFqIRkgGUECSARADAIMAQsLC0EAIRoDQAJAIABBuIIzIBpBAnRqakMAAAAAOAIAIBpBAWohGiAaQQJIBEAMAgwBCwsLQQAhGwNAAkAgAEHEgjMgG0ECdGpqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQCAAQdCCMyAcQQJ0ampDAAAAADgCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAIABB3IIzIB1BAnRqakMAAAAAOAIAIB1BAWohHSAdQQJIBEAMAgwBCwsLQQAhHgNAAkAgAEHkgjMgHkECdGpqQwAAAAA4AgAgHkEBaiEeIB5BgBBIBEAMAgwBCwsLQQAhHwNAAkAgAEHkwjMgH0ECdGpqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQCAAQezCMyAgQQJ0ampDAAAAADgCACAgQQFqISAgIEECSARADAIMAQsLC0EAISEDQAJAIABB9MIzICFBAnRqakMAAAAAOAIAICFBAWohISAhQYAQSARADAIMAQsLC0EAISIDQAJAIABB9II0ICJBAnRqakMAAAAAOAIAICJBAWohIiAiQQJIBEAMAgwBCwsLQQAhIwNAAkAgAEH8gjQgI0ECdGpqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQCAAQYSDNCAkQQJ0ampDAAAAADgCACAkQQFqISQgJEGAEEgEQAwCDAELCwtBACElA0ACQCAAQYTDNCAlQQJ0ampDAAAAADgCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAIABBjMM0ICZBAnRqakMAAAAAOAIAICZBAWohJiAmQQJIBEAMAgwBCwsLQQAhJwNAAkAgAEGUwzQgJ0ECdGpqQwAAAAA4AgAgJ0EBaiEnICdBgBBIBEAMAgwBCwsLQQAhKANAAkAgAEGUgzUgKEECdGpqQwAAAAA4AgAgKEEBaiEoIChBAkgEQAwCDAELCwtBACEpA0ACQCAAQZyDNSApQQJ0ampDAAAAADgCACApQQFqISkgKUECSARADAIMAQsLC0EAISoDQAJAIABBpIM1ICpBAnRqakMAAAAAOAIAICpBAWohKiAqQYAQSARADAIMAQsLC0EAISsDQAJAIABBpMM1ICtBAnRqakMAAAAAOAIAICtBAWohKyArQQJIBEAMAgwBCwsLQQAhLANAAkAgAEGswzUgLEECdGpqQwAAAAA4AgAgLEEBaiEsICxBAkgEQAwCDAELCwtBACEtA0ACQCAAQbTDNSAtQQJ0ampDAAAAADgCACAtQQFqIS0gLUGAEEgEQAwCDAELCwtBACEuA0ACQCAAQbSDNiAuQQJ0ampDAAAAADgCACAuQQFqIS4gLkECSARADAIMAQsLC0EAIS8DQAJAIABBvIM2IC9BAnRqakMAAAAAOAIAIC9BAWohLyAvQQJIBEAMAgwBCwsLQQAhMANAAkAgAEHEgzYgMEECdGpqQwAAAAA4AgAgMEEBaiEwIDBBgBBIBEAMAgwBCwsLQQAhMQNAAkAgAEHEwzYgMUECdGpqQwAAAAA4AgAgMUEBaiExIDFBAkgEQAwCDAELCwtBACEyA0ACQCAAQczDNiAyQQJ0ampDAAAAADgCACAyQQFqITIgMkECSARADAIMAQsLC0EAITMDQAJAIABB1MM2IDNBAnRqakMAAAAAOAIAIDNBAWohMyAzQYAQSARADAIMAQsLC0EAITQDQAJAIABB1IM3IDRBAnRqakMAAAAAOAIAIDRBAWohNCA0QQJIBEAMAgwBCwsLQQAhNQNAAkAgAEHcgzcgNUECdGpqQwAAAAA4AgAgNUEBaiE1IDVBgAhIBEAMAgwBCwsLQQAhNgNAAkAgAEHcozcgNkECdGpqQwAAAAA4AgAgNkEBaiE2IDZBAkgEQAwCDAELCwtBACE3A0ACQCAAQeSjNyA3QQJ0ampDAAAAADgCACA3QQFqITcgN0GABEgEQAwCDAELCwtBACE4A0ACQCAAQeSzNyA4QQJ0ampDAAAAADgCACA4QQFqITggOEECSARADAIMAQsLC0EAITkDQAJAIABB7LM3IDlBAnRqakMAAAAAOAIAIDlBAWohOSA5QYAESARADAIMAQsLC0EAIToDQAJAIABB7MM3IDpBAnRqakMAAAAAOAIAIDpBAWohOiA6QQJIBEAMAgwBCwsLQQAhOwNAAkAgAEH0wzcgO0ECdGpqQwAAAAA4AgAgO0EBaiE7IDtBgAJIBEAMAgwBCwsLQQAhPANAAkAgAEH0yzcgPEECdGpqQwAAAAA4AgAgPEEBaiE8IDxBAkgEQAwCDAELCwsL1YKAgAAAIABBpIAgaiABNgIAIABBqIAgakMAgDtIQwAAgD8gAEGkgCBqKAIAspeWOAIAIABBrIAgakMAAAAAQ0d9MEIgAEGogCBqKgIAlZMQATgCACAAQbCAIGpDAACAPyAAQayAIGoqAgCTOAIAIABByIAgakMAAIA/IABBqIAgaioCAJU4AgAgAEHggCBqQ9sPyUAgAEGogCBqKgIAlTgCACAAQZSBMGpDuB7dQCAAQaiAIGoqAgCVOAIAIABBiIIzakOrqqo+IABBqIAgaioCAJU4AgAgAEGogjNqQyVJEj4gAEGogCBqKgIAlTgCACAAQbSCM2pDAAAAPyAAQaiAIGoqAgCVOAIAIABBwIIzakMAAIA+IABBqIAgaioCAJU4AgAgAEHMgjNqQ6uqKj4gAEGogCBqKgIAlTgCACAAQdiCM2pDAAAAPiAAQaiAIGoqAgCVOAIAC5CAgIAAACAAIAEQDCAAEA4gABALC9uCgIAAACAAQYiAIGpDAAAAADgCACAAQYyAIGpDTKaqPjgCACAAQZCAIGpDAAAAPzgCACAAQZSAIGpDAAAAPzgCACAAQaCAIGpDAAAAADgCACAAQbSAIGpDAAAAPzgCACAAQcCAIGpDAAAAADgCACAAQcSAIGpDAAAAADgCACAAQcyAIGpDAAAAPzgCACAAQfSAIGpDAAAAPzgCACAAQYCBIGpDAAAAADgCACAAQYSBIGpDAAAAADgCACAAQYiBIGpDmpmZPjgCACAAQZCBMGpDAAAAPzgCACAAQZiBMGpDAAAAPzgCACAAQayBMGpDAAAAADgCACAAQciBMGpDAAAAADgCACAAQdSBMWpDrkdhPjgCACAAQeCBMWpDAAAAADgCACAAQeSBMWpDAABAPzgCACAAQfCBM2pDAAAAPzgCACAAQfyBM2pDAAAAPzgCACAAQYyCM2pDAAAAPzgCAAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwukzoCAAAEAQQALnU57Im5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCIsImZpbGVuYW1lIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QiLCJ2ZXJzaW9uIjoiMi4xMS41IiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVyLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbXVzaWMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRoLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjkxMDg2MCIsImlucHV0cyI6IjIiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCJ9LHsiZmlsdGVyLmxpYi9hdXRob3IiOiJKdWxpdXMgTy4gU21pdGggKGpvcyBhdCBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJmaWx0ZXIubGliL2NvcHlyaWdodCI6Ikp1bGl1cyBPLiBTbWl0aCBJSUkifSx7ImZpbHRlci5saWIvZGVwcmVjYXRlZCI6IlRoaXMgbGlicmFyeSBpcyBkZXByZWNhdGVkIGFuZCBpcyBub3QgbWFpbnRhaW5lZCBhbnltb3JlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gQXVndXN0IDIwMTcuIn0seyJmaWx0ZXIubGliL2xpY2Vuc2UiOiJTVEstNC4zIn0seyJmaWx0ZXIubGliL25hbWUiOiJGYXVzdCBGaWx0ZXIgTGlicmFyeSJ9LHsiZmlsdGVyLmxpYi9yZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL2ZpbHRlcnMvIn0seyJmaWx0ZXIubGliL3ZlcnNpb24iOiIxLjI5In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRoLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aC5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGgubGliL2RlcHJlY2F0ZWQiOiJUaGlzIGxpYnJhcnkgaXMgZGVwcmVjYXRlZCBhbmQgaXMgbm90IG1haW50YWluZWQgYW55bW9yZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIEF1Z3VzdCAyMDE3LiJ9LHsibWF0aC5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGgubGliL25hbWUiOiJNYXRoIExpYnJhcnkifSx7Im1hdGgubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibXVzaWMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtdXNpYy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im11c2ljLmxpYi9kZXByZWNhdGVkIjoiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4ifSx7Im11c2ljLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibXVzaWMubGliL25hbWUiOiJNdXNpYyBMaWJyYXJ5In0seyJtdXNpYy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2F1dGhvciI6IkdyYW1lIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9jb3B5cmlnaHQiOiIoYykgR1JBTUUgMjAwNiBhbmQgTW9Gb3J0ZSBJbmMuIDIwMTcifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2Rlc2lnbmVyIjoiUm9iZXJ0IEEuIE1vb2cifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2ludGVyZmFjZSI6IlNtYXJ0S2V5Ym9hcmR7ICAgICAnTnVtYmVyIG9mIEtleWJvYXJkcyc6JzInLCAgICAgJ0tleWJvYXJkIDAgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAxIC0gTnVtYmVyIG9mIEtleXMnOicxMycsICAgICAnS2V5Ym9hcmQgMCAtIExvd2VzdCBLZXknOic3MicsICAgICAnS2V5Ym9hcmQgMSAtIExvd2VzdCBLZXknOic2MCcgfSJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvbGljZW5zZSI6IkJTRCJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvbmFtZSI6ImZyZWV2ZXJiIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9yZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvRnJlZXZlcmIuaHRtbCJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvdmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkVmZmVjdHMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRWNobyIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJLbm9icyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVsYXkiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9EZWxheSIsImluZGV4IjoiNzg2NTg0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNjEifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAuMDAxIiwibWF4IjoiMC43NDIwMzkiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXJwIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvV2FycCIsImluZGV4IjoiNzg2NjA0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNjIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheVQ2MCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0RlbGF5VDYwIiwiaW5kZXgiOiI3ODY1NzYiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA2MCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkZlZWRiYWNrIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRmVlZGJhY2siLCJpbmRleCI6IjUyNDQyNCIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMyIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkFtcCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0FtcCIsImluZGV4IjoiNTI0NDA0IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgNzUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmVlZGJhY2tTbSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0ZlZWRiYWNrU20iLCJpbmRleCI6IjUyNDQxNiIsIm1ldGEiOlt7IjUiOiIifSx7Im1pZGkiOiJjdHJsIDc2In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMWUtMDUifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVuYWJsZUVjaG8iLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Td2l0Y2hlcy9FbmFibGVFY2hvIiwiaW5kZXgiOiI1MjQ0MjAiLCJtZXRhIjpbeyI3IjoiIn0seyJtaWRpIjoiY3RybCAxMDUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRmxhbmdlciIsIm1ldGEiOlt7IjUiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJLbm9icyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVsYXkiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9EZWxheSIsImluZGV4IjoiODAzMDI4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjIiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL1JhdGUiLCJpbmRleCI6IjUyNDM2NCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDUxIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVwdGgiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9EZXB0aCIsImluZGV4IjoiODAzMDQ0IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgNTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNzUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkZlZWRiYWNrIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvRmVlZGJhY2siLCJpbmRleCI6Ijc4NjYzMiIsIm1ldGEiOlt7IjUiOiIifSx7Im1pZGkiOiJjdHJsIDUzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiLTAuOTk1IiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhdmVzaGFwZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL1dhdmVzaGFwZSIsImluZGV4IjoiNTI0MzU2IiwibWV0YSI6W3siNyI6IiJ9LHsibWlkaSI6ImN0cmwgNTQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvU3dpdGNoZXMvRW5hYmxlIiwiaW5kZXgiOiI1MjQzNTIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxMDIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiSW52ZXJ0IiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvU3dpdGNoZXMvSW52ZXJ0IiwiaW5kZXgiOiI4MDMwNDAiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA0OSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJDaG9ydXMiLCJtZXRhIjpbeyI2IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiS25vYnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlbGF5IiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Lbm9icy9EZWxheSIsImluZGV4IjoiODM1ODI0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJSYXRlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Lbm9icy9SYXRlIiwiaW5kZXgiOiI4MzU4NTIiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA1NiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiNyIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGVwdGgiLCJpbmRleCI6IjUyNDM0MCIsIm1ldGEiOlt7IjQiOiIifSx7Im1pZGkiOiJjdHJsIDU3In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRldmlhdGlvbiIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGV2aWF0aW9uIiwiaW5kZXgiOiI4MzU4MzYiLCJtZXRhIjpbeyI2IjoiIn0seyJtaWRpIjoiY3RybCA1OCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVuYWJsZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvU3dpdGNoZXMvRW5hYmxlIiwiaW5kZXgiOiI1MjQzMjAiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxMDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEYW1wIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL1JldmVyYi9Lbm9icy9EYW1wIiwiaW5kZXgiOiI1MjQzMDgiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCAzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlJvb21TaXplIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL1JldmVyYi9Lbm9icy9Sb29tU2l6ZSIsImluZGV4IjoiNTI0MzA0IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgNCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMjUifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXZXQiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL0tub2JzL1dldCIsImluZGV4IjoiNTI0MzAwIiwibWV0YSI6W3sibWlkaSI6ImN0cmwgNzkifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMzMzMyIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDI1In1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFbmFibGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL1N3aXRjaGVzL0VuYWJsZSIsImluZGV4IjoiNTI0Mjk2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMTA0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class virtualAnalogWithEffectsForBrowserPolyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	virtualAnalogWithEffectsForBrowserPolyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(group.items, obj, callback);
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
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(item.items, obj, callback);
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
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= virtualAnalogWithEffectsForBrowserPolyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        
        // Add instrument parameters
        virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser()).ui, params, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item1);
        
        // Possibly add effect parameters
        if (typeof (getJSONeffect) !== "undefined") {
             virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(JSON.parse(getJSONeffect()).ui, params, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item1);
        }
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
        
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser());
        } catch (e) {
            return null;
        }
        
        var effect_json_object_size = 0;
        if (typeof (getJSONeffect) !== "undefined") {
            var effect_json_object = null;
            try {
                effect_json_object = JSON.parse(getJSONeffect());
                effect_json_object_size = parseInt(effect_json_object.size);
            } catch (e) {
                faust.error_msg = "Error in JSON.parse: " + e;
                return null;
            }
        }
        
        var memory_size = pow2limit(effect_json_object_size + parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser());
        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }
        
        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.debug = false;
        
        this.ins = null;
        this.outs = null;
        this.mixing = null;
        this.compute_handler = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.fFreqLabel = [];
        this.fGateLabel = [];
        this.fGainLabel = [];
        this.fDate = 0;
        
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }
   
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.memory = virtualAnalogWithEffectsForBrowserPolyProcessor.createMemory(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony);

        // Create Mixer
        this.mixObject = { imports: { print: arg => console.log(arg) } }
        this.mixObject["memory"] = { "memory": this.memory };

        this.importObject = {
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
                
                memory: this.memory,
                
                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        }

        this.factory = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_module, this.importObject).exports;
        this.HEAP = this.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);
        
        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);
        
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module, this.mixObject).exports;
        
        // wasm effect
        this.effect = (virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module) ? new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module, this.importObject).exports : null;
        
        if (this.debug) {
            console.log(this.mixer);
            console.log(this.factory);
            console.log(this.effect);
        }
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony;
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
        
        // Effect memory starts after last voice
        this.effect_start = this.dsp_voices[this.polyphony - 1] + parseInt(this.json_object.size);
    
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
            this.dsp_voices_trigger[voice] = true;    // so that envelop is always re-initialized
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
                if (this.debug) {
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                }
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug) {
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
                }
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI part
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(this.json_object.ui, this, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item2);
            
            if (this.effect) {
                virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(this.effect_json_object.ui, this, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item2);
            }
     
            // keep 'keyOn/keyOff' labels
            for (i = 0; i < this.inputs_items.length; i++) {
                if (this.inputs_items[i].endsWith("/gate")) {
                    this.fGateLabel.push(this.pathTable[this.inputs_items[i]]);
                } else if (this.inputs_items[i].endsWith("/freq")) {
                    this.fFreqLabel.push(this.pathTable[this.inputs_items[i]]);
                } else if (this.inputs_items[i].endsWith("/gain")) {
                    this.fGainLabel.push(this.pathTable[this.inputs_items[i]]);
                }
            }
            
            // Init DSP voices
            for (i = 0; i < this.polyphony; i++) {
                this.factory.init(this.dsp_voices[i], sampleRate);  // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
            
            // Init effect
            if (this.effect) {
                this.effect.init(this.effect_start, sampleRate);
            }
        }
        
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            if (this.debug) {
                console.log("keyOn voice %d", voice);
            }
            for (var i = 0; i < this.fFreqLabel.length; i++) {
                this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel[i], this.midiToFreq(pitch));
            }
            for (var i = 0; i < this.fGainLabel.length; i++) {
                this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel[i], velocity/127.);
            }
            this.dsp_voices_state[voice] = pitch;
            this.dsp_voices_trigger[voice] = true;
        }
        
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                // Be sure the voice is not triggered
                this.dsp_voices_trigger[voice] = false;	
                if (this.debug) {
                    console.log("keyOff voice %d", voice);
                }
                // No use of velocity for now...
                for (var i = 0; i < this.fGateLabel.length; i++) {
                    this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel[i], 0.0);
                }
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                if (this.debug) {
                    console.log("Playing voice not found...");
                }
            }
        }
        
        this.allNotesOff = function ()
        {
            for (var i = 0; i < this.polyphony; i++) {
                for (var j = 0; j < this.fGateLabel.length; j++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 0.0);
                }
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
                    this.setParamValue(path, virtualAnalogWithEffectsForBrowserPolyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            if (this.effect && getJSONeffect().includes(path)) {
                this.effect.setParamValue(this.effect_start, this.pathTable[path], val);
            } else {
                for (var i = 0; i < this.polyphony; i++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
                }
            }
        }

        this.getParamValue = function (path)
        {
            if (this.effect && getJSONeffect().includes(path)) {
                return this.effect.getParamValue(this.effect_start, this.pathTable[path]);
            } else {
                return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
            }
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
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    for (var j = 0; j < this.fGateLabel.length; j++) {
                        this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 0.0);
                    }
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    for (var j = 0; j < this.fGateLabel.length; j++) {
                        this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 1.0);
                    }
                    this.factory.compute(this.dsp_voices[i], virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.0005) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
        }
        
        // Apply effect
        if (this.effect) {
            this.effect.compute(this.effect_start, virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.outs, this.outs);
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
virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size = 128;
virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony = 16;

// Synchronously compile and instantiate the WASM modules
try {
    if (virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module == undefined) {
        virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64Mixer()));
        virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64CodevirtualAnalogWithEffectsForBrowser()));
        // Possibly compile effect
        if (typeof (getBase64Codeeffect) !== "undefined") {
            virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64Codeeffect()));
        }
        registerProcessor('virtualAnalogWithEffectsForBrowserPoly', virtualAnalogWithEffectsForBrowserPolyProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust virtualAnalogWithEffectsForBrowserPoly cannot be loaded or compiled");
}


