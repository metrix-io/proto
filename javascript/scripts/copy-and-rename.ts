import * as klawSync from 'klaw-sync';
import * as path from 'path';
import * as fse from 'fs-extra';

const filenameReplacements = new Map<string, string>();
filenameReplacements.set('_grpc_web_pb', '-client');
filenameReplacements.set('_pb', '');

const files = klawSync('./proto', { nodir: true });
for (const file of files) {
    let filename = path.basename(file.path);
    filenameReplacements.forEach((replacement, match) => {
        filename = filename.replace(match, replacement);
    });

    const dirname = path.dirname(file.path);
    const target = path.resolve(dirname, '..', filename);

    fse.moveSync(file.path, target, { overwrite: true })
}
