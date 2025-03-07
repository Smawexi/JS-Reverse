var u = function(t, n) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]],
                n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                var e = [0, 0, 0, 0];
                return e[3] += t[3] + n[3],
                e[2] += e[3] >>> 16,
                e[3] &= 65535,
                e[2] += t[2] + n[2],
                e[1] += e[2] >>> 16,
                e[2] &= 65535,
                e[1] += t[1] + n[1],
                e[0] += e[1] >>> 16,
                e[1] &= 65535,
                e[0] += t[0] + n[0],
                e[0] &= 65535,
                [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            }

var c = function(t, n) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]],
                n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                var e = [0, 0, 0, 0];
                return e[3] += t[3] * n[3],
                e[2] += e[3] >>> 16,
                e[3] &= 65535,
                e[2] += t[2] * n[3],
                e[1] += e[2] >>> 16,
                e[2] &= 65535,
                e[2] += t[3] * n[2],
                e[1] += e[2] >>> 16,
                e[2] &= 65535,
                e[1] += t[1] * n[3],
                e[0] += e[1] >>> 16,
                e[1] &= 65535,
                e[1] += t[2] * n[2],
                e[0] += e[1] >>> 16,
                e[1] &= 65535,
                e[1] += t[3] * n[1],
                e[0] += e[1] >>> 16,
                e[1] &= 65535,
                e[0] += t[0] * n[3] + t[1] * n[2] + t[2] * n[1] + t[3] * n[0],
                e[0] &= 65535,
                [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            };

function s(t, n) {
                return 32 === (n %= 64) ? [t[1], t[0]] : n < 32 ? [t[0] << n | t[1] >>> 32 - n, t[1] << n | t[0] >>> 32 - n] : (n -= 32,
                [t[1] << n | t[0] >>> 32 - n, t[0] << n | t[1] >>> 32 - n])
            };

function p(t, n) {
                return [t[0] ^ n[0], t[1] ^ n[1]]
            };
function l(t, n) {
                return 0 === (n %= 64) ? t : n < 32 ? [t[0] << n | t[1] >>> 32 - n, t[1] << n] : [t[1] << n - 32, 0]
            };

function v(t) {
                return t = p(t, [0, t[0] >>> 1]),
                t = p(t = c(t, [4283543511, 3981806797]), [0, t[0] >>> 1]),
                t = p(t = c(t, [3301882366, 444984403]), [0, t[0] >>> 1])
            };

var d = function(t) {
                var n = 202
                  , e = 202
                  , o = 208
                  , i = 218
                  , a = 218
                  , f = 208
                  , d = 218
                  , h = 218
                  , g = 218
                  , m = 208
                  , y = 218
                  , b = 218
                  , w = 218
                  , _ = 208
                  , O = 218
                  , S = 208
                  , E = 208
                  , A = 218
                  , x = 208
                  , I = 208
                  , k = 208
                  , T = 218
                  , j = 208
                  , R = 218
                  , P = 208
                  , C = 218
                  , M = 208
                  , L = 218
                  , N = 208
                  , D = 218
                  , F = 218
                  , U = 215
                  , B = 205
                  , H = 225
                  , G = 210
                  , K = 205
                  , W = 225
                  , q = 215
                  , V = 205
                  , X = 225
                  , Y = 210
                  , Q = 215
                  , J = 205
                  , z = 210
                  , Z = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Z = Z || 0;
                for (var tt = (t = t || "")["length"] % 16, nt = t["length"] - tt, et = [0, Z], rt = [0, Z], ot = [0, 0], it = [0, 0], at = [2277735313, 289559509], ut = [1291169091, 658871167], ct = 0; ct < nt; ct += 16)
                    ot = [255 & t["charCodeAt"](ct + 4) | (255 & t["charCodeAt"](ct + 5)) << 8 | (255 & t['charCodeAt'](ct + 6)) << 16 | (255 & t['charCodeAt'](ct + 7)) << 24, 255 & t['charCodeAt'](ct) | (255 & t['charCodeAt'](ct + 1)) << 8 | (255 & t['charCodeAt'](ct + 2)) << 16 | (255 & t['charCodeAt'](ct + 3)) << 24],
                    it = [255 & t['charCodeAt'](ct + 12) | (255 & t['charCodeAt'](ct + 13)) << 8 | (255 & t['charCodeAt'](ct + 14)) << 16 | (255 & t['charCodeAt'](ct + 15)) << 24, 255 & t['charCodeAt'](ct + 8) | (255 & t['charCodeAt'](ct + 9)) << 8 | (255 & t['charCodeAt'](ct + 10)) << 16 | (255 & t['charCodeAt'](ct + 11)) << 24],
                    ot = s(ot = c(ot, at), 31),
                    et = s(et = p(et, ot = c(ot, ut)), 27),
                    et = u(et, rt),
                    et = u(c(et, [0, 5]), [0, 1390208809]),
                    it = s(it = c(it, ut), 33),
                    rt = s(rt = p(rt, it = c(it, at)), 31),
                    rt = u(rt, et),
                    rt = u(c(rt, [0, 5]), [0, 944331445]);
                switch (ot = [0, 0],
                it = [0, 0],
                tt) {
                case 15:
                    it = p(it, l([0, t['charCodeAt'](ct + 14)], 48));
                case 14:
                    it = p(it, l([0, t['charCodeAt'](ct + 13)], 40));
                case 13:
                    it = p(it, l([0, t['charCodeAt'](ct + 12)], 32));
                case 12:
                    it = p(it, l([0, t['charCodeAt'](ct + 11)], 24));
                case 11:
                    it = p(it, l([0, t['charCodeAt'](ct + 10)], 16));
                case 10:
                    it = p(it, l([0, t['charCodeAt'](ct + 9)], 8));
                case 9:
                    it = p(it, [0, t["charCodeAt"](ct + 8)]),
                    it = s(it = c(it, ut), 33),
                    rt = p(rt, it = c(it, at));
                case 8:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 7)], 56));
                case 7:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 6)], 48));
                case 6:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 5)], 40));
                case 5:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 4)], 32));
                case 4:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 3)], 24));
                case 3:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 2)], 16));
                case 2:
                    ot = p(ot, l([0, t['charCodeAt'](ct + 1)], 8));
                case 1:
                    ot = p(ot, [0, t['charCodeAt'](ct)]),
                    ot = s(ot = c(ot, at), 31),
                    et = p(et, ot = c(ot, ut))
                }
                return et = p(et, [0, t['length']]),
                rt = p(rt, [0, t['length']]),
                et = u(et, rt),
                rt = u(rt, et),
                et = v(et),
                rt = v(rt),
                et = u(et, rt),
                rt = u(rt, et),
                ('00000000')['concat']((et[0] >>> 0)['toString'](16))['slice'](-8) + ('00000000')['concat']((et[1] >>> 0)['toString'](16))['slice'](-8) + ('00000000')['concat']((rt[0] >>> 0)['toString'](16))['slice'](-8) + ('00000000')['concat']((rt[1] >>> 0)['toString'](16))['slice'](-8)
            };

var t = "ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode"
var webgl_extensions_hash = d(t)
console.log(webgl_extensions_hash)

var t = 'webgl_extensions,ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode,webgl_extensions_hash,7300c23f4e6fa34e534fc99c1b628588,webgl_renderer,WebKit WebGL,webgl_vendor,WebKit,webgl_version,WebGL 1.0 (OpenGL ES 2.0 Chromium),webgl_shading_language_version,WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium),webgl_aliased_line_width_range,[1, 1],webgl_aliased_point_size_range,[1, 1024],webgl_antialiasing,yes,webgl_bits,8,8,24,8,8,0,webgl_max_params,16,32,16384,1024,16384,16,16384,30,16,16,4096,webgl_max_viewport_dims,[32767, 32767],webgl_unmasked_vendor,Google Inc. (AMD),webgl_unmasked_renderer,ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001638) Direct3D11 vs_5_0 ps_5_0, D3D11),webgl_vsf_params,23,127,127,23,127,127,23,127,127,webgl_vsi_params,0,31,30,0,31,30,0,31,30,webgl_fsf_params,23,127,127,23,127,127,23,127,127,webgl_fsi_params,0,31,30,0,31,30,0,31,30,webgl_hash_webgl,'
var webgl_hash_webgl = d(t)
console.log(webgl_hash_webgl)
var t = "unknown;en-US;24;1.5;1494,954;1494,894;-480;true;true;true;false;false;unknown;Win32;381165788;false;false;false;;Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,PDF Viewer,WebKit built-in PDF;0,false,false;16;false"
var ife_hash = d(t)
console.log(ife_hash)
