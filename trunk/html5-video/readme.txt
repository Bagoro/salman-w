The following commands were used to convert the movie:

ffmpeg.exe -v verbose -i big-buck-bunny-720p.avi -c:v libx264 -profile:v baseline -preset slow -b:v 400k -c:a libvo_aacenc -b:a 96k -s 512x288 big-buck-bunny-288p-standard.mp4
ffmpeg.exe -v verbose -i big-buck-bunny-720p.avi -c:v libx264 -profile:v baseline -preset slow -b:v 400k -c:a libvo_aacenc -b:a 96k -s 512x288 -movflags faststart big-buck-bunny-288p-faststart.mp4

The original movie is available at www.bigbuckbunny.org
Copyright 2008, Blender Foundation / www.bigbuckbunny.org
